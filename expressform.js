var express=require('express');
var path=require('path');
var app=express();
app.get('/form',function(req,res) {
	res.type('html');
	res.end('<form><input name="str" formmethod="POST" /> </form>');
});
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.post('/form',function(req,res) {
	res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);
