var path=require('path');
var fs=require('fs');
var fold=process.argv[2];
if (fold =="" || fold ==undefined) { console.log("no folder specified as 1st argument!");return;}
var ext = process.argv[3];
if (ext =="" || ext ==undefined) {console.log("no extension specified as 2nd argument!");return;}
else
{
//	console.log("Listing contents of folder:"+fold+" having extension ."+ext);
}
var f=fs.readdir(fold,function(err, data){
			for (i=0;i<data.length;i++) 
				{
					if (path.extname(data[i].toString())=="."+ext)
						 {
							console.log(data[i].toString());
						}
				}
			});
