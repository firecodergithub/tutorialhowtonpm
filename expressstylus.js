var express=require('express');
var path=require('path');
var app=express();
var stylus=require('stylus');

app.use(stylus.middleware(process.argv[3]||(__dirname+'/public'))); //to process the css .styl file
app.use(express.static(process.argv[3]||(__dirname+'/public'))); //to process the static file
app.listen(process.argv[2]);
