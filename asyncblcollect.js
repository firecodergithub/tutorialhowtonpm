var http=require('http');
var bl=require('bl');
//check that params are there
if (!process.argv[2] || !process.argv[3] || !process.argv[4]) return;

//define class prototype that stores which callback number we are at
var CallbackClass=function(i)
{
	this.i=i;//what callback number this is
	this.doCallback=function(response)
	{

				response.setEncoding("utf8");
				response.pipe(bl(function(er,dat)
						{
							if (er) return console.error("Eroare:"+er);
							objCallb[i].response=dat.toString();
//							console.log(i);
//							console.log(objCallb);
							if (objCallb[0].response!="" && objCallb[1].response!="" && objCallb[2].response!="")
								{
								console.log(objCallb[0].response);
								console.log(objCallb[1].response);
								console.log(objCallb[2].response);
								}
							}));
		
	}
}
//declare the objects and run the callback
var objCallb=[new CallbackClass(0),new CallbackClass(1),new CallbackClass(2)];
for (var i=2;i<5;i++)
{
	http.get(process.argv[i],objCallb[i-2].doCallback);
}
