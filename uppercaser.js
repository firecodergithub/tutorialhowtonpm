var map=require('through2-map');
var http=require('http')
var serv=http.createServer(function(req,resp)
		{
			if (req.method != 'POST')  
				 return res.end('send me a POST request!\n')
			req.pipe(map(function (chunk) {  
				       return chunk.toString().toUpperCase();
				     })).pipe(resp); 
		});
serv.listen(process.argv[2]);
