function callb(error,data)
{

 var cnt=data.toString().split('\n').length-1; 
	console.log(cnt);
	return;
}

var fs=require('fs');
var fl =fs.readFile(process.argv[2],callb);

