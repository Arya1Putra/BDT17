
var first = parseInt(process.argv[2]);
var scnd = parseInt(process.argv[4]);

switch(process.argv[3]){
	case "tambah" :
		var tambah=first+scnd;
		console.log(tambah);
		break;
	case "kurang" :
		var kurang=first-scnd;
		console.log(kurang);
		break;
	case "kali" :
		var kali=first*scnd;
		console.log(kali);
		break;
	case "bagi" :
		var bagi=first/scnd;
		console.log(bagi);
		break;
}