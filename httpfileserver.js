var http=require('http');
var fs=require('fs');

//create the server using the callback
var server=http.createServer(function(req,res)
		{
			res.writeHead(200, { 'content-type': 'video/mp4' })  ;
			var filestream=fs.createReadStream(process.argv[3]);
			filestream.pipe(res);
		});
server.listen(process.argv[2]);
