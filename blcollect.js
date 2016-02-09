//using the bl module to collect piped gets
var http=require('http');
var bl=require('bl');
http.get(process.argv[2],function(response)
		{
			response.setEncoding("utf8");
			response.pipe(bl(function(er,dat)
					{
						if (er) return console.error("Eroare:"+er);
						console.log(dat.toString().length);
						console.log(dat.toString());
					}));
			response.on("error",function (data)
				{console.log("Err:"+data);});
		});
