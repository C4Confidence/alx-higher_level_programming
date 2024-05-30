#!/usr/bin/node
// A script that displays the status code of a GET Request

const request = require('request');
const name = process.argv[2];

request(name, (error, response) => {
	if (error) console.log(error);

	console.log('code:', response.statusCode);
});
