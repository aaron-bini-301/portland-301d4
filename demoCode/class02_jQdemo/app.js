$('#myDiv').text('Using .text()... Mark-up is "literal": <p>blah</p>');

if (1) {
  var $myDiv = $('#myDiv'); // jQuery object, NOT a normal JS DOM object
  $myDiv.html('Using .html(): <p>New paragraph</p>');
//  $myDiv.text('Using .text(): <p>New paragraph</p>');


  // var myDiv = $myDiv[0];
  // myDiv.innerHTML = 'innerHTML <em>words words</em>';
}
