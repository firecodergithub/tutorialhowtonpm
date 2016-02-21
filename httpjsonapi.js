var http=require('http');
var url=require('url');

//create the server using the callback
var server=http.createServer(function(req,res)
		{
			var urlobj=url.parse(req.url,true);
			if (urlobj.pathname=='/api/parsetime')
				{
					res.writeHead(200,{'content-type':'text/json'});
					var iso=urlobj.query.iso;
					var dt=new Date(iso);
					var jsn={};
					jsn.hour=dt.getHours();
					jsn.minute=dt.getMinutes();
					jsn.second=dt.getSeconds();
					res.end(JSON.stringify(jsn));
				}
			else
	if (urlobj.pathname=='/api/unixtime')
				{
					res.writeHead(200,{'content-type':'text/json'});
					var iso=urlobj.query.iso;
//					console.log(iso);
					var dt=new Date(iso);
					var jsn={};
					jsn.unixtime=dt.getTime();
					res.end(JSON.stringify(jsn));
				}
		else
			{
				res.writeHead(404);
				res.end();
			}
		});
server.listen(process.argv[2]);
