require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var fs = require("fs");
var request = require ("request");



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



var action = process.argv[2];
var nodeArgs = process.argv;
var userInput = "";
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        console.log(nodeArgs);
        userInput = userInput + "+" + nodeArgs[i];
    }
    else {
        userInput += nodeArgs[i];
    }

};


// client.get('search/tweets', {q: 'star trek'}, function(error, tweets, response) {
//     var statuses = tweets.statuses.map(function(tweet){return tweet.text});
//     console.log(statuses);
// });



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


function omdbGrab() {

    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            var ratingText = '';
            var ratings = data.Ratings.filter(function(rating) {
                var notMetacritic = rating.Source !== "Metacritic";
                if (notMetacritic) {ratingText += rating.Source + ': ' + rating.Value + "\n"}
                return notMetacritic;
            });


            console.log("Title: " + data.Title);
            console.log("Release Year: " + data.Year);
            console.log("IMDB Rating: " + data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + data.imdbRating);
            console.log("Country: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Plot: " + data.Plot);
            console.log("Actors: " + data.Actors);
            console.log(ratingText);
        }
    });

}

//* Title of the movie.
//* Year the movie came out.
//* IMDB Rating of the movie.
//* Rotten Tomatoes Rating of the movie.
//* Country where the movie was produced.
//* Language of the movie.
//* Plot of the movie.
//* Actors in the movie.