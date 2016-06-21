/**
 * Created by Chris on 2016-06-16.
 */

/// <reference path="typings/_werkTypings.d.ts" />

"use strict";

var express = require('express');
var app = express();

// hides server information from header for security reasons
app.disable("x-powered-by");

// perse encoded data from post
app.use(require('body-parser').urlencoded({extended: true}));

// upload files
var formidable = require('formidable');

var credentials = require('./credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret));

// associates the accessPort with "port"
app.set("port", process.env.PORT || 3000);

// set handle bars as view engine
var handlebars = require("express-handlebars").create({defaultLayout:"main"});
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

// allows access to public files
app.use(express.static(__dirname+"/public"));

// ROOTS
app.get('/',(req,res)=>{
    // using specified rendering engine, render home
    res.render("home",{name:"chris"});
});

app.use(function(req,res,next){
    console.log("Looking for URL: "+req.url);
    next();
});

app.get('/junk',function(req,res,next){
    console.log('Tried to access /junk');
    throw new Error(' /junk doesn\'t exist');
});

app.use(function(err,req,res,next){
    console.log('Error :');
    next();
});

app.get('/file-upload', function (req, res) {
    var now = new Date();
    res.render('upload',{
        year: now.getFullYear(),
        month: now.getMonth()
    });
});

app.get('/file-upload/:year/:month', function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err, feilds, file){
        if(err){
            return res.redirect(303,'/error');
        }
        console.log('Recieved!!!!!!');
    })
})

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/contact', function(req, res){
    // sends varible csrf into the template to be inserted using handlebars
    res.render('contact',{ csrf: 'CSRF token here'});
});

app.get('/thankyou',function(req, res){
    res.render('thankyou');
});

app.post('/process', function(req,res){
    console.log('Form : ' + req.query.form);
    console.log('CSRF token ' + req.body._csrf);
    console.log('Email : ' + req.body.email);
    console.log('Question : ' + req.body.ques);
    //res.redirect(303,'/thankyou');
});

// put at back so it doesn't get in the way of the pipeline
app.use(function(req,res){
    //res.type('text/html');
    //res.status(404);
    //res.render('404');
});

app.use(function(err,req,res,next){
    console.error("stack");
    res.status(500);
    res.render('500');
});


app.listen(app.get("port"),()=>{
    console.log("Server running on port "+app.get("port") +" Press Ctrl-C to quit");
});



