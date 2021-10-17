const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable

app.get('/photo', function (req, res) {
  res.send(
    `<img src="https://random-shit-store.s3.amazonaws.com/614b73c98a97c40c65957b89/10152161254.jpg">`
  );
});
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`));
