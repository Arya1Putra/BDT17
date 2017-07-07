var fs = require('fs');
var buff = fs.readFile(process.argv[2], function doneReading(err,fileContents){
	var str= fileContents.toString();
	var arraystring = str.split('\n');
	var jumlahline = arraystring.length;
	console.log(jumlahline-1);
});
