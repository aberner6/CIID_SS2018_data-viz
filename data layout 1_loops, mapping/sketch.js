var rad = 10;
var rads = [30, 10, 5, 9, 7, 14];

function setup() {
  createCanvas(500, 500);
  background(200, 0, 0, 40);
  noStroke();

  // spreadDownCirc();
  // spreadAcrossCirc();
  // spreadGridOne();
  // spreadGridTwo();
  spreadGridThree();
}

function draw() {}

function spreadDownCirc() {
  for (var i = 0; i < rads.length; i++) {
    var y = map(i, 0, rads.length, 50, height - 10);
    ellipse(rad * 12, y, rads[i], rads[i])
  }
}

function spreadAcrossCirc() {
  for (var i = 0; i < rads.length; i++) {
    var x = map(i, 0, rads.length, 50, width - 10);
    ellipse(x, height / 2, rads[i], rads[i])
  }
}
