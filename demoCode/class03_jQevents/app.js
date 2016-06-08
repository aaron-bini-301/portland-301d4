// Handle clicks in the ul
$('ul').on('click', function(ev) {
  console.log('ev = ', ev);
  console.log('ev.target = ', ev.target);
//console.log($(this));
  $('h2').text(ev.target.textContent);
});

// Handle button clicks
$('button').on('click', function() {
  $('ul').append('<li>Content 2</li>');
});
