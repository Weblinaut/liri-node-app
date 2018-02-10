# liri-node-app


Welcome to the Liri-Node-App
By Derek Johnson

You will need to follow instructions on creating a .env file found below. 

Now with inquirer support!!!

From the command prompt, enter node liri.js to execute the program. 

Options are -

Search Twitter - Enter a search term for Twitter. 

Get movie info - Enter movie name to search.

Search Spotify - Enter a search for a song and get top results

Something Else... - TBD




.env file instructions 
===================================================

Create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret


Twitter API
++++++++++++++++++++++++++++++++++++++++++++++++++

Get your Twitter API keys by following these steps:
Step One: Visit https://apps.twitter.com/app/new

Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.

Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.

Copy and paste them into your .env file, replacing the your-twitter-consumer-key and your-twitter-consumer-secret placeholders.
Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.

Copy the access token key and secret displayed at the bottom of the next screen. Paste them into your .env file, replacing the placeholders for your-twitter-access-token-key and your-twitter-access-token-secret.

Spotify API
=================================================
Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

Step One: Visit https://developer.spotify.com/my-applications/#!/

Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.


