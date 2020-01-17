const fs = require('fs');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const download = (url, filename, callback) => {
  request.head(url, () => {
    request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const base64Encode = file => {
  const bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString('base64');
};

app.post('/', (req, res) => {
  download(req.body.URL, 'editableImage.jpg', () => {
    const code = `data:image/jpeg;base64,${base64Encode('./editableImage.jpg')}`;
    fs.unlink('editableImage.jpg', (err) => {
      if (err) {
        throw err;
      }
    });

    res.json({ code });
  });
});

app.listen(5000, () => {
  console.log('Server is started!');
});
