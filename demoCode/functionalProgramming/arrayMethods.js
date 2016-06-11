var x = [1, 2, 3, 4];
var y = [1, 2, 3, 4];
Array.prototype.bee = 'I\'m a bee!'; // New property on the built-in JS object "Array"
console.log(x.bee);
console.log(y.bee);

//==========================

function exceedsTwo(x) { return x > 2; }; // Filtering function
var z = x.filter(exceedsTwo);  // Use JS's built-in .filter()

// Show that filtering works
console.log('JS filter() output: ', z);
console.log('x after  .filter(): ', x); // x is untouched

// My custom version of .filter()
Array.prototype.myFilter = function(cb) {
  var out_array = [];
  for (var ii = 0; ii < this.length; ii++) {
    if (cb(this[ii]))  out_array.push(this[ii]);
  }
  return out_array;
}

// Show that filtering works with .myFilter()
console.log('x before .myFilter(): ', x);
var y = x.myFilter(exceedsTwo);
console.log('myFilter() output: ', y);
console.log('x after  .myFilter(): ', x , '(is this the same?)'); // x is untouched


//========================
// Filter articles
var myArts = [
  { author: 'Beverly Crusher',
    category: 'Star Trek',
    body: 'Medicine Is Advanced'
  },
  { author: 'Katherine Janeway',
    category: 'Star Trek',
    body: '<p>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.</p><p>Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out anomalies. Probes have recorded unusual levels of geological activity in all five planetary systems. Assemble a team. Look at records of the Drema quadrant. Would these scans detect artificial transmissions as well as natural signals?</p>'
  },
  { author: 'Jean-Luc Picard',
    category: 'Star Trek',
    body: "<p>These are the voyages of the Starship Enterprise. Its continuing mission, to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before. We need to neutralize the homing signal. Each unit has total environmental control, gravity, temperature, atmosphere, light, in a protective field. Sensors show energy readings in your area. We had a forced chamber explosion in the resonator coil. Field strength has increased by 3,000 percent.</p><p>Resistance is futile.</p>"
  },
  { author: 'Horace Pucky Galore',
    category: 'AwesomeNot',
    body: '<p>Source your ecosystem solutions</p>'
  },
  { author: 'Art D. Zai-Ner',
    category: 'AwesomeNot',
    body: '<p>In graphic design, the jumbled Latin phrase “lorem ipsum” is used as a placeholder in advance of finished text. Designers employ this language in order to focus attention on the structural elements of a layout, such as typography, without being distracted by readable content. Much like its graphic usage, Lorem Ipsum will be a work in progress designed to expose the conceptual and logistical mechanisms of an exhibition.</p>'
  },
  { author: 'Foe-knee Yoozed-Kar-Sails',
    category: 'AwesomeNot',
    body: '<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>'
  }
];

// Find articles in a specific category
var trekArts = myArts.filter(function(el) { return ('Star Trek' == el.category); });
// .map() can pull out the author of each article in the category
var trekAuthors = trekArts.map(function(el) { return el.author; });
console.log('Star Trek article authors = ', trekAuthors);

// Count words in each article of a given array
function wordCount(blob) {
  var words = blob.split(' ');
  return words.length;
}
var trekArtWords = trekArts.map(function(el) { return wordCount(el.body); });
console.log('Words in each Star Trek article = ', trekArtWords);

var trekTotalWords = trekArtWords.reduce( function(sum, b) { return sum + b; } );
console.log('Total words in star trek article bodies = ', trekTotalWords);
console.log('Average word count in star trek article bodies = ', trekTotalWords/trekArts.length);

