var words = ['My ', 'dog ', 'has ', 'fleas.. :-('];

var sentence = words.reduce(function(prev, ele) { return prev + ele; });
console.log('Words about my dog = ', words);
console.log('Sentence about my dog = ', sentence);
sentence = words.reduce(function(prev, ele) { return prev + ele; }, 'Hey! ');
console.log('Sentence about my dog w/ initial value for \'prev\' = ', sentence);
