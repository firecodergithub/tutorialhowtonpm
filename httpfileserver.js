var http=require('http');
var fs=require('fs');

//create the server using the callback
var server=http.createServer(function(req,res)
		{
			var filestream=fs.createReadStream(process.argv[3]);
			filestream.pipe(res);
		});
server.listen(process.argv[2]);
