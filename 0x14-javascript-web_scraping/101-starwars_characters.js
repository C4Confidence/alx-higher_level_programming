#!/usr/bin/node

const { argv } = require('process');
const request = require('request');
const util = require('util');

const api = `https://swapi-api.alx-tools.com/api/films/${argv[2]}`;
const requestPromise = util.promisify(request);

request(api, { json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  async function fetchAllData (bc) {
    for (const idx in bc) {
      try {
        const res = await requestPromise({ uri: bc[idx], json: true });
        const resBody = res.body;
        console.log(resBody.name);
      } catch (err) {
        console.error(err);
      }
    }
  }

  fetchAllData(body.characters);
});
