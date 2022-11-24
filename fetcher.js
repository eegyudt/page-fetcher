//page fetcher
const request = require('request');
const fs = require('fs');

const args = process.argv;

let page = args[2];
let fileName = args[3];

request(page, function(error, response, body) {
  if (error) {
    console.log(error);
    return;
  };

  fs.writeFile(fileName, body, function(error) {
    if (error) {
      console.log(error);
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
  });
});

/https://github.com/eegyudt/page-fetcher



