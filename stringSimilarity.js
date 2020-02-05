const stringSimilarity = require('string-similarity');

var similarity = stringSimilarity.compareTwoStrings('porto seguro', 'ponto feio');

var matches = stringSimilarity.findBestMatch('batata', ['batatas', 'bata', 'abata']);

console.log(`similarity:${similarity} e matches:${matches}`);