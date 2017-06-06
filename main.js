// send requests to coderwall so it looks like people view my article

var request = require('request');
var url = process.argv[2];

for(var i=0; i < 1000; i++){
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log('request sent');
	  } else {
	  	console.error('shit guys', error);
	  }
	});
}