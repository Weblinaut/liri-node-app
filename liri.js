require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require('inquirer');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var fs = require("fs");
var request = require ("request");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

inquirer.prompt([
    {
        type: "list",
        name: "userChoice",
        message: "I am Liri, what would you like for me to do??",
        choices: ["Search Twitter", "Get movie info", "Get song info", "Something Else..."]
    },
    {
        type: "input",
        name: "searchQuery",
        message: "What would you like to search for???"
    },

]).then(function(response) {
    var response = response;
    if (response.userChoice === "Get movie info") {
        var queryUrl = "http://www.omdbapi.com/?t=" + response.searchQuery + "&y=&plot=short&apikey=trilogy";
        request(queryUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var data = JSON.parse(body);
                var ratingText = '';
                var ratings = data.Ratings.filter(function (rating) {
                    var notMetacritic = rating.Source !== "Metacritic";
                    if (notMetacritic) {
                        ratingText += rating.Source + ': ' + rating.Value + "\n"
                    }
                    return notMetacritic;
                });

                console.log("Title: " + data.Title + "\nRelease Year: " + data.Year + "\nCountry: " +  ratingText +data.Country +"\nLanguage: " + data.Language + "\nPlot: " + data.Plot + "\nActors: " + data.Actors);

            }
        });
    }
    if (response.userChoice === "Search Twitter") {
        client.get('search/tweets', {q: response.searchQuery}, function(error, tweets, response) {
            var statuses = tweets.statuses.map(function(tweet){return tweet.text});
            console.log(statuses);

        });

    }
    if (response.userChoice === "Get song info") {
        spotify
            .search({ type: 'track', query: response.searchQuery })
            .then(function(resp) {

                for (let i = 0; i < resp.tracks.items.length; i++) {
                    let track = resp.tracks.items[i].name
                    let songUrl = resp.tracks.items[i].href
                    let albumName = resp.tracks.items[i].album.name
                    let artists = []
                    for(let j = 0; j < resp.tracks.items[i].artists.length; j++) {
                        let artistName = resp.tracks.items[i].artists[j].name
                        artists.push(artistName)

                    }
                    console.log(`${i + 1} 
${artists.join(",")}
${track}
${songUrl}
${albumName}
`)//es6 string literals

                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});
