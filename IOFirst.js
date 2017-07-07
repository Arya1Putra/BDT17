var fs = require('fs');
buff=fs.readFileSync(process.argv[2]);
var str = buff.toString();
var arraystring = str.split('\n');
var jumlahline = arraystring.length;
console.log(jumlahline-1);


