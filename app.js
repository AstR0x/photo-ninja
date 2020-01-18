const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const utils = require('./utils');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.post('/', (req, res) => {
  utils.download(req.body.URL, 'editableImage.jpg', () => {
    const code = `data:image/jpeg;base64,${utils.base64Encode('./editableImage.jpg')}`;
    fs.unlink('editableImage.jpg', (err) => {
      if (err) {
        throw err;
      }
    });

    res.json({ code });
  });
});

const PORT = config.get('PORT') || 5000;

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}!`);
});
