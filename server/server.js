// private
const config = require('./config.js');
// Initialize express
const express = require('express');
const app = express();

const path = require('path');
// Identify PORT
const PORT = process.env.PORT || 8080;

// Spotify api
const SpotifyWebApi = require('spotify-web-api-node');


// credentials are optional
const spotifyApi = new SpotifyWebApi(config);

app.use(express.static('client'));
app.use("/client", express.static(__dirname + "/../client"));
// Spotify callback route
app.get('/api/callback', (req, res) => {
  if (req.query.error) {
    res.redirect('/')
  } else {
    res.send(req.query);  
  }
  console.log(req.query.state);
  console.log(req.query.code);
  console.log(req.query.error);
});

app.get('/api/login', (req, res) => {
  res.redirect('https://accounts.spotify.com/en/authorize?response_type=code&redirect_uri=http:%2F%2Flocalhost:8080%2Fapi%2Fcallback&client_id=a4a8e06faf484969acb7ccf28a8fbe58&scope=user-read-private%20playlist-read-private%20user-top-read%20playlist-read-collaborative%20user-follow-read%20user-library-read');
});

// static routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../index.html`));
});



// start listening
app.listen(PORT, () => {
  console.log(`Localhost running on port:${PORT}`);
});
