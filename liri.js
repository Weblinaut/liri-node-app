var fs = require("fs");
var request = require ("request");

var bot = process.argv[2];
var input = process.argv[3];


require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);