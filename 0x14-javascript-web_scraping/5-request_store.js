#!/usr/bin/node

const { argv } = require('process');
const request = require('request');
const fs = require('node:fs');

const file = argv[3];

request(argv[2], (error, response, body) => {
  if (error) {
    console.error(error);
  }

  fs.writeFile(file, body, error => {
    if (error) {
      console.error(error);
    }
  });
});
