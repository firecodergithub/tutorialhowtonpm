var express=require('express');
var path=require('path');
app=express();
//var serv=http.createServer(function(req,res)
//		{
			app.use(express.static(process.argv[3]||path.join(__dirname,'public')));
//		});
app.listen(process.argv[2]);
					
