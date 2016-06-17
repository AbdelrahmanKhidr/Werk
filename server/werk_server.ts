/**
 * Created by Chris on 2016-06-16.
 */
/// <reference path="../typings/node.d.ts" />

var express = require('express');
var app = express();

app.set("port", process.env.PORT || 3000);

app.get('/',(req,res)=>{
    res.send("express works doggy dog")
});

app.listen(app.get("port"),()=>{
    console.log("It works doggy dog frog");
});



