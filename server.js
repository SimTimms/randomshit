const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable

app.get('/photo', function (req, res) {
  res.send(
    `<html><head><meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@site_username">
    <meta name="twitter:title" content="Top 10 Things Ever">
    <meta name="twitter:description" content="Up than 200 characters.">
    <meta name="twitter:creator" content="@creator_username">
    <meta name="twitter:image" content="http://placekitten.com/250/250">
    <meta name="twitter:domain" content="YourDomain.com">
    </head>
    <body>
    <img src="https://random-shit-store.s3.amazonaws.com/614b73c98a97c40c65957b89/10152161254.jpg"></body></html>`
  );
});
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`));
