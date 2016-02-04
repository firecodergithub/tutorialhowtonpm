var fs=require('fs');
var fl =fs.readFileSync(process.argv[2]);
var cnt=fl.toString().split('\n').length-1;

console.log(cnt);
