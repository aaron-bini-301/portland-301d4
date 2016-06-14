/* Sandbox for chaining array methods, from class 07's README.md

Chain together array methods (item #8 E.C.):
- Array of objects
- Extract one value from each object
- Filter on values
- Find average value
*/

var art = [
  { price: 5,
    artist: 'Picasso'
  },
    
  { price: 300,
    artist: 'DaVinci'
  },
    
  { price: 1000,
    artist: 'Rembrandt'
  },

  { price: 2000,
    artist: 'Gauguin'
  }
];

console.log('art = ', art);
//console.log(JSON.stringify(art));

if (false) {
// Django unchained!!
var prices = art.map(function(ele) { return ele.price; } );
console.log('prices = ', prices);

var highPrices = prices.filter(function(ele) { return ele > 100}); // Art most expensive than $100
console.log('High prices = ', highPrices);

var avg = highPrices.reduce(function(prev, cur) { return prev + cur; } ) / highPrices.length;
} // if false

// Equivalent imperative version (for .reduce() only):
if (false) {
var prev = highPrices[0];
for (var ii=1; ii < highPrices.length; ii++) {
  cur = highPrices[ii];
  function accumulate() { return prev + cur; }
  prev = accumulate();
}
var avg = prev / highPrices.length;
} // if false


// Chain together array methods
highPricesLength = 0;
var avg = art
    .map(function(ele) { return ele.price; } )
    .filter(function(ele) { return ele > 100; } )
    .reduce(function(prev, cur, idx, arr) {
      highPricesLength = arr.length; // "hack" -- breaking the chain would be cleaner.
      return prev + cur; } ) / highPricesLength;
console.log('avg = ', avg);
