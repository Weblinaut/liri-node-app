var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var request = require ("request");
require("dotenv").config();


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log(spotify);

var action = process.argv[2];
var nodeArgs = process.argv;
var userInput = "";
for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        userInput = userInput + "+" + nodeArgs[i];
    }
    else {
        userInput += nodeArgs[i];
    }

};

console.log(userInput);



switch (action) {
    case "my-tweets":
        twitGrab();
        break;
    case "spotify-this-song":
        spotGrab();
        break;
    case "movie-this":
        omdbGrab();
        break;
    case "do-what-it-says":
        doWhat();
        break;
}


function omdbGrab(userInput) {

    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Release Year: " + JSON.parse(body).Year);
        }
    });

}