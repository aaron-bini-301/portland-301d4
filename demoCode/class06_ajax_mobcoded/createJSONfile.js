// Sandbox for ajax

var y = [];

$(document).ready(function() {

  var x = [
    ['Nebelung', 'Horace'],
    ['Sphynx', 'Theodora']
  ];
  var Cat = function(name,breed) {
    this.name = name;
    this.breed = breed;
    this.noise = function () {
      console.log('meow.');
    };
  };
  for (var i = 0; i < x.length; i++) {
    y.push(new Cat(x[i][1] , x[i][0]));
  }

  console.log(y);
  console.log(JSON.stringify(y));
});
