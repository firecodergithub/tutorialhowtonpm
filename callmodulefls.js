var modfls=require("./modulefls");
modfls(process.argv[2],process.argv[3],function(er,data){if (er) {console.log("There was an error:"+er);return;} 
						for (i=0;i<data.length;i++) console.log(data[i].toString());});
