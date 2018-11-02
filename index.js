const functions = require('firebase-functions');
const firebase = require("firebase/app");
require("firebase/database");
const cron = require("cron").CronJob;

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

var job = new cron("* 20 12 * * *", function()
{
	db.ref("/HC_GAMES/").remove();
	
},null, true, "Asia/Tokyo"
);

job.start();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase!");
});
