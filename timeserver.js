var net=require('net');
var server=net.createServer(function(socket)
		{
			var dt=new Date();
			var data=dt.getFullYear().toString()+"-"+((dt.getMonth()<9)?"0":"")+
						(dt.getMonth()+1).toString()+"-"+((dt.getDate()<10)?"0":"")+
						(dt.getDate()).toString()+" "+((dt.getHours()<10)?"0":"")+
						(dt.getHours()).toString()+":"+((dt.getMinutes()<10)?"0":"")+
						(dt.getMinutes()).toString()+"\r\n";


			socket.write(data);
			socket.end();

		});
server.listen(process.argv[2]);
