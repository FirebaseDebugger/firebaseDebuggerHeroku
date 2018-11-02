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

var job = new cron("* 55 20 * * *", function()
{
	db.ref("/HC_GAMES/").remove();
	
},null, true, "Asia/Tokyo"
);

job.start();

module.exports.job = job;