var rad = 10;
var rads = [30, 10, 5, 9, 7, 14];

var cols = rads.length / 2;
var rows = 2;

var spacer = 100;

function setup() {
  createCanvas(500, 500);
  background(200, 0, 0, 40);
  noStroke();

  ellipseMode(CENTER)
  spreadGridOne();
  // spreadGridTwo();
  // spreadGridThree();
}

function draw() {}

function spreadGridOne() {
  for (var i = 0; i < rads.length; i++) {
    var x = map(i, 0, rads.length, 50, width - 10);
    var y = map(i, 0, rads.length, 50, height - 10);
    ellipse(x, y, rads[i], rads[i]);
  }
}

function spreadGridTwo() {
  for (var i = 0; i < rads.length; i++) {
    var x, y;
    if (i < rads.length / 2) {
      x = map(i, 0, rads.length / 2, 50, width - 10);
      y = height / 2;
    } else {
      y = height / 4;
      x = map(i, rads.length / 2, rads.length, 50, width - 10);
    }
    ellipse(x, y, rads[i], rads[i]);
  }
}

function spreadGridThree() {
  var gridSize = 30 * rads.length;
  var numItems = width / gridSize;
  console.log(numItems);

  var x, y;
  for (var i = 0; i < rads.length; i++) {
    y = height / 4;
    x = map(i, 0, numItems, 50, width - 10);

    if (i >= numItems) {
      y = y + height / 4;
      x = map(i, numItems, rads.length, 50, width - 10);
    }
    ellipse(x, y, rads[i], rads[i]);
  }
}

//advanced
// function spreadGridFour() {
//   for (var i = 0; i < cols; i++) {
//     for (var j = 0; j < rows; j++) {
//       ellipse(spacer + i * spacer, spacer + j * spacer, ___, ___);
//     }
//   }
// }