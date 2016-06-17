/**
 * Created by Chris on 2016-06-16.
 */
/// <reference path="../typings/node.d.ts" />

var express = require('express');
var app = express();
const accessPort = 3000;

app.set("port", process.env.PORT || accessPort);

app.get('/',(req,res)=>{
    res.send("express works doggy")
});

app.listen(app.get("port"),()=>{
    console.log("Server running on port "+accessPort +" Press Ctrl-C to quit");
});



