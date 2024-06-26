#!/usr/bin/node

const fs = require('fs');

const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

fs.readFile(sourceFile1, 'utf8', (err1, data1) => {
  if (err1) {
    console.error(`Error reading ${sourceFile1}: ${err1}`);
    return;
  }

  fs.readFile(sourceFile2, 'utf8', (err2, data2) => {
    if (err2) {
      console.error(`Error reading ${sourceFile2}: ${err2}`);
      return;
    }

    const concatenatedData = data1 + data2;

    fs.writeFile(destinationFile, concatenatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to ${destinationFile}: ${err}`);
        return;
      }
      console.log(`Files ${sourceFile1} and ${sourceFile2} concatenated successfully to ${destinationFile}`);
    });
  });
});
