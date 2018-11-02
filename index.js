//const functions = require('firebase-functions');
const firebase = require("firebase/app");
require("firebase/database");
const cron = require("cron").CronJob;
const http = require('http');

var config = {
    apiKey: "AIzaSyB5gymhz9lDbjRyo4UaBKpEknqJsej2tyg",
    authDomain: "rankingtest-4a870.firebaseapp.com",
    databaseURL: "https://rankingtest-4a870.firebaseio.com",
    projectId: "rankingtest-4a870",
    storageBucket: "rankingtest-4a870.appspot.com",
    messagingSenderId: "352458038722"
};

firebase.initializeApp(config);

var db = firebase.database();

var job = new cron("* 48 16 * * *", function()
{
	db.ref("/HC_GAMES/").remove();
	
},null, true, "Asia/Tokyo"
);

job.start();

http.createServer(function (request, res) {
	console.log("server");
	console.log(request);
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Hello World\n');
}).listen(process.env.PORT || 5000);
