module.exports=function(fold,ext,callb)
{
var path=require('path');
var fs=require('fs');
var f=fs.readdir(fold,function(err, data){
			if (err!=null) return callb(err); //call the callback just with the error
			var ar=[];
			for (i=0;i<data.length;i++) 
				{
					if (path.extname(data[i].toString())=="."+ext)
						 {
							ar.push(data[i].toString());
						}
				}
				callb(null,ar); //pass the list to the callback function
			});
}
