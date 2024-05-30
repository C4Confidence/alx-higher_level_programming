#!/usr/bin/node

const { argv } = require('process');
const request = require('request');

request(argv[2], { json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  let count = 0;
  for (const result of body.results) {
    for (const listing of result.characters) {
      if (listing.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
