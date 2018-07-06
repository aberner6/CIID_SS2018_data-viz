var rad = 10;

function setup() {
  createCanvas(500, 500);
  background(200, 0, 0, 40);
  noStroke();

  oneCirc();
  twoCirc();
  
  thirtyCirc();
  
  spreadThirtyCirc();
}

function draw() {}

function oneCirc() {
  ellipse(rad, height / 2, rad, rad)
}

function twoCirc() {
  ellipse(rad*4, height / 2, rad, rad)
  ellipse(rad*4, height / 4, rad, rad)
}

function thirtyCirc() {
  for (var i = 0; i < 31; i++) {
    ellipse(rad*8, rad+height / i, rad, rad)
  }
}
function spreadThirtyCirc(){
  for (var i = 0; i < 31; i++) {
    var y = map(i, 0, 31, 10, height-10);
    ellipse(rad*12, y, rad, rad)
  }
}