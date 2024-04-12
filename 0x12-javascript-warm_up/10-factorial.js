#!/usr/bin/node

const factorial = function fact (n) {
  return isNaN(n) || n <= 1 ? 1 : n * fact(n - 1);
};

const num = parseInt(process.argv[2]);

console.log(factorial(num));
