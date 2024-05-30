#!/usr/bin/node
// A script that writes a string to a file

const fs = require('fs');
const name = process.argv[3];
const filename = process.argv[2];

fs.writeFile(filename, name, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
});

