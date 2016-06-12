var plog = document.getElementById('plog');
function clearlog() { plog.innerHTML = ''; }
function mylog(v) { plog.innerHTML += v + '<br>'; }
clearlog();

function Car(color) {
  this.color = color;
  this.paint = function() {
    mylog('this.color = ' + this.color);
  };
}
var tesla = new Car('silver');
mylog('tesla = ' + tesla);
var color = 'global color';

var $btn1 = $('#btn1');
var btn1 = $btn1[0];
btn1.color = 'asdf';

// Good place to do binding:
//$btn1.on('click', tesla.paint.bind(tesla));
// If we skip binding here, we'll get the wrong context ...
$btn1.on('click', tesla.paint);

$('#btn2').on('click', bindTesla);

function bindTesla() {
  tesla.paint = tesla.paint.bind(tesla); // ... even if we bind here. Too late!
  console.log('tesla.paint = ', tesla.paint);

  // But we can fix that. We can disconnect the old .paint() (which has no "Car" context bound to it)
  // and connect the new .paint() (which now *does* have a "Car" context bound to it).
  $btn1.off('click');
  $btn1.on('click', tesla.paint);
}

/* Lesson: Context is implicitly bound to an event handler at the moment of
 * registration. After registration, any change to the original callback
 * function's context does NOT propogate to the handler. So bind before
 * registering.
 */