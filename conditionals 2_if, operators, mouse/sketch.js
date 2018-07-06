var rad = 10;
var numCircs = 31;
var r, g, b;

function setup() {
  createCanvas(500, 500);
  background(200, 0, 0, 40);
  noStroke();
}

function draw() {
  // mouseOverOne();
  // mouseOverTwo();
  // mouseOverThree();
  // mouseOverFour();
}

function mouseOverOne() {
  for (var i = 0; i < numCircs; i++) {

    var y = map(i, 0, numCircs, 10, height - 10);

    if (mouseX == rad * 12) {
      fill(0, 0, 255);
      ellipse(rad * 12, y, rad, rad);
    } else {
      fill(255);
      ellipse(rad * 12, y, rad, rad);
    }
  }
}

function mouseOverTwo() {
  for (var i = 0; i < numCircs; i++) {
    var y = map(i, 0, numCircs, 10, height - 10);
    if (mouseX <= rad * 12 && mouseX >= rad * 11) {
      fill(0, 0, 255);
      ellipse(rad * 12, y, rad, rad);
    } else {
      fill(255);
      ellipse(rad * 12, y, rad, rad);
    }
  }
}

function mouseOverThree() {
  for (var i = 0; i < numCircs; i++) {
    var y = map(i, 0, numCircs, 10, height - 10);

    if (mouseX <= rad * 12 && mouseX >= rad * 11 &&
      mouseY <= (y + rad / 2) && mouseY >= (y - rad / 2)
    ) {
      fill(0, 0, 255);
      ellipse(rad * 12, y, rad, rad);
    } else {
      fill(255);
      ellipse(rad * 12, y, rad, rad);
    }
  }
}

function mouseOverFour() {
  for (var i = 0; i < numCircs; i++) {
    var y = map(i, 0, numCircs, 10, height - 10);
    fill(r, g, b);
    ellipse(rad * 12, y, rad, rad);
  }
}

function mousePressed() {
  for (var i = 0; i < numCircs; i++) {
    var y = map(i, 0, numCircs, 10, height - 10);
    // Check if mouse is inside the circle
    var d = dist(mouseX, mouseY, rad * 12, y);
    if (d < rad) {
      // Pick new random color values
      r = random(255);
      g = random(255);
      b = random(255);
    }
  }
}