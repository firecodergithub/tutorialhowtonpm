var express=require('express');
var path=require('path');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.get('/form',function(req,res) {
	res.end('<form><input name="str" /> </form>');
});
app.post('/form',function(req,res) {
	res.body.str.split('').reverse().join('');
});
app.listen(process.argv[2]);
