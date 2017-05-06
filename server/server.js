// private
const config = require('./config.js');
// Initialize express
const express = require('express');
const app = express();


// Identify PORT
const PORT = process.env.PORT || 8080;

// Spotify api
const SpotifyWebApi = require('spotify-web-api-node');


// credentials are optional
const spotifyApi = new SpotifyWebApi(config);

//Spotify callback route
app.get('/api/callback', (req, res) => {
  console.log(req.query.state);
  console.log(req.query.code);
  console.log(req.query.error);

  res.send('no problem');
});

//static routes
app.get('*', (req, res) => {
  res.sendFile('../index.html');
})



//start listening
app.listen(PORT, () => {
  console.log(`Localhost running on port:${PORT}`);
});
