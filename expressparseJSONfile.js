var express=require('express');
var fs=require('fs');
var app=express();
fs.readFile(process.argv[3],function(er,dat){
	var jsonfile=dat.toString();
	var obj=JSON.parse(jsonfile);
	app.get('/books',function(req,res)
			{
				res.json(obj);
			}
		       );
		});
app.listen(process.argv[2]);
