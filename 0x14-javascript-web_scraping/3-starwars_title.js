#!/usr/bin/node

// Script that prints the title af Star Wars Movie.

const { argv } = require('process');
const request = require('request');

const api = `https://swapi-api.alx-tools.com/api/films/${argv[2]}`;

request(api, { json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  console.log(body.title);
});
