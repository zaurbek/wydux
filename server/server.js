// private
const config = require('./config.js');
// Initialize express
const express = require('express');
const app = express();

// Spotify api
const SpotifyWebApi = require('spotify-web-api-node');


// credentials are optional
const spotifyApi = new SpotifyWebApi(config);


app.get('/api/callback', (req, res) => {
  console.log(req.query.state);
  console.log(req.query.code);
  console.log(req.query.error);

  res.send('no problem');
});


app.listen(8888);
