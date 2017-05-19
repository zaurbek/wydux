
// Initialize express
const express = require('express');
const app = express();



const path = require('path');
// Identify PORT
const PORT = process.env.PORT || 8080;

app.use('/client', express.static(`${__dirname}/client`));


// static routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/index.html`));
});


// start listening
app.listen(PORT, () => {
  console.log(`Localhost running on port:${PORT}`);
});
