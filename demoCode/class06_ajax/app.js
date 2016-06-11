$button = $('button');
$plog = $('#plog');
function mylog(v) { $plog.html($plog.html() + v + '<br>'); }

$button.on('click', f1); // Top level event handler
function f1(event) {
  mylog('Button clicked.');
}

var obj = { animal: 'dog', name: 'Fido' };

var obj_string = JSON.stringify(obj);
mylog(obj_string);

var tmp = 'You are TOOOOOOOO early.';

$.getJSON('myobj.json',
  function(data) {
 // .getJSON effectively does: var data = JSON.parse(JSONstring_from_server)
    tmp = data;
    mylog('Inside AJAX callback: tmp = ' + tmp);
    mylog('&nbsp; &nbsp; or, as a string, tmp = ' + JSON.stringify(tmp));
  })
  .fail(function() { console.log('Problem with data!'); } )
  .always(function() { console.log('Thanks, we still love you no matter what.'); });

/* If this app were more complex, we could make conditional async requests:
  if (data.name == 'Fido') {
    $.getJSON('doginfo.json', function() { }) }
  else if (data.name == 'whiskers') {
    $.getJSON('catinfo.json', function() { }) }
*/

mylog('1');
mylog('2');
mylog('3');
mylog('Right after getJSON(): tmp = ' + tmp);
