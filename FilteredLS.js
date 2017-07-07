
	var fs = require('fs');
	const path = require('path');
	var rdir = fs. readdir(process.argv[2], function (err, list){
	for( i=0 ; i< list.length ; i++){
		if("."+process.argv[3] == path.extname(list[i])){
			console.log(list[i]);	
			}
			
		}
	})	
