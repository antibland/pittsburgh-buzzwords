var uniqueRandomArray = require('unique-random-array');
var buzzwords = require('./pittsburgh-buzzwords.json');

module.exports = {
  all : buzzwords,
  random : uniqueRandomArray(buzzwords)
};