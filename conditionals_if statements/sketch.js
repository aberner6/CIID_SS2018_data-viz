var rad = 10;

function setup() {
  createCanvas(500, 500);
  background(200, 0, 0, 40);
  noStroke();

  spreadThirtyCirc();
  ifTwenty();
}

function draw() {}

function spreadThirtyCirc() {
  for (var i = 0; i < 31; i++) {
    var y = map(i, 0, 31, 10, height - 10);
    ellipse(rad * 12, y, rad, rad);
  }
}

function ifTwenty() {
  for (var i = 0; i < 31; i++) {
    var y = map(i, 0, 31, 10, height - 10);
    if (i == 20) {
      fill(255, 0, 0);
      ellipse(rad * 12, y, rad, rad);
    } else {
      ellipse(rad * 12, y, rad, rad);
    }
  }
}