//const functions = require('firebase-functions');
const http = require('http');
const clock = require('./clock.js');

http.createServer(function (request, res) {
	console.log("server");
	console.log(request);
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Hello World\n');
}).listen(process.env.PORT || 5000);

