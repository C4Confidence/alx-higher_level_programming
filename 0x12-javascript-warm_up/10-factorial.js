#!/usr/bin/node

const factorial = n => isNaN(n) || n <= 1 ? 1 : n * factorial(n - 1);

const num = parseInt(process.argv[2]);

console.log(factorial(num));
