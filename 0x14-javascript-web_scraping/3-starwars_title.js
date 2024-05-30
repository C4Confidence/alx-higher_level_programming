#!/usr/bin/node

// Script that prints the title of Star Wars Movie.

const name = 'https://swapi-api.alx-tools.com/api/films/';
const id = process.argv[2];
const url = name + id;
const req = require('request');

console.log(url);

req(url, { json: true}, (error, response, body) => {
	if (error) console.error(error);

	console.log(body.title);
});
