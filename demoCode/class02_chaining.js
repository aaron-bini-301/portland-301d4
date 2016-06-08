/* Function chaining demo */

var colors = {
  chocolate:  'brown',
  blueberry:  'blue',
  cherry:     'red',
  strawberry: 'red',
  vanilla:    'yellow',
}

function cupcake(flavor) {
  this.flavor = flavor;
  this.color  = 'beige'; // unflavored
  this.weight = 6; // 6 oz when unbaked
  this.comment = '';
}

cupcake.prototype.bake = function() {
  this.color = colors[this.flavor];
  this.weight = 4;
  this.comment = 'Baked just right';
  return this;
}

cupcake.prototype.eat = function() {
  this.color = '';
  this.flavor = '';
  this.weight = 0;
  this.comment = 'All gone!';
  return this;
}

cupcake.prototype.dump = function() {
  console.log('flavor = ' + this.flavor);
  console.log('color  = ' + this.color);
  console.log('weight = ' + this.weight);
  console.log('comment= ' + this.comment);
  console.log('--------------');
  return this;
}

var cho = new cupcake('chocolate');
var oldWay = false;

if (oldWay) {
  cho.dump();

  cho.bake();
  cho.dump();

  cho.eat();
  cho.dump();
}
else { // New way: chained functions!
  cho.dump().bake().dump().eat().dump(); // More compact but yields same result
}

/*
Chaining w/o using objects (pseudo-code):

dump(eat(dump(bake(dump(cho)))));

function dump(c) {
  console.log('flavor = ' + c.flavor);
  ... etc. ...
  return c;
}

function bake(c) {
  ... etc. ...
  return c
}
*/

var blu = new cupcake('blueberry');
blu.dump();

van = (new cupcake('vanilla')).dump().eat(); // We can chain the constructor call
van.dump();
