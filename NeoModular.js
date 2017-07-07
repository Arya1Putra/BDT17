var filterfn = require('./modular.js');
var dir = process.argv[2];
var filterstr = process.argv[3];

filterfn(dir, filterstr, function(err, list){
	if(err)
		return console.error('There is an error:', err);
	list.forEach(function(file){
		console.log(file);
	})
})