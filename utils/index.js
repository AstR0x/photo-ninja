const fs = require('fs');
const request = require('request');

const download = (url, filename, callback) => {
  request.head(url, () => {
    request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const base64Encode = file => {
  const bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString('base64');
};

module.exports = {download, base64Encode};