#!/usr/bin/node

const { argv } = require('process');
const request = require('request');

const api = `https://swapi-api.alx-tools.com/api/films/${argv[2]}`;

request(api, { json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  for (const ch of body.characters) {
    request(ch, { json: true }, (err, res, body) => {
      if (err) {
        console.error(err);
      }
      console.log(body.name);
    });
  }
});
