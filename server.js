const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable

app.get('/photo', function (req, res) {
  res.send(
    `<html><head><meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@timsimmsdev">
    <meta name="twitter:title" content="Paint Miniatures in 3d">
    <meta name="twitter:description" content="Try colour schemes on 3d miniatures">
    <meta name="twitter:creator" content="@timsimmsdev">
    <meta property="og:title" content="Paint Miniatures in 3d" />
<meta property="og:description" content="Try colour schemes on 3d miniatures" />
<meta property="og:image" content="https://random-shit-store.s3.amazonaws.com/${req.query.photo}.jpg" />
    <meta name="twitter:image" content="https://random-shit-store.s3.amazonaws.com/${req.query.photo}.jpg">
    <meta name="twitter:domain" content="minipainter3d.com">
    </head>
    <body>
    <img src="https://random-shit-store.s3.amazonaws.com/${req.query.photo}.jpg"></body></html>`
  );
});

app.use('/partner*', express.static(path.join(__dirname, 'build')));
app.use('/app*', express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`));
