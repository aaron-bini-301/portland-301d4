// Sandbox for ajax
var myCats = 'hello';

$(document).ready(function() {

  $.getJSON('cats.json').done(showCats);

  function showCats(data) {
    myCats = data;
    console.log('myCats = ', myCats);
    myCats.forEach(function(ele) {
      ele.noise = function() { console.log('meow.'); };
    });
  }
  console.log('myCats = ', myCats);
});
