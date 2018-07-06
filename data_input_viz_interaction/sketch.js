var stuff, data;

function preload() {
  // The text from the file is loaded into an array. 
  stuff = loadStrings("data/data.txt");
}

function setup() {
  createCanvas(480, 270);
  // This array has one element because the file only has one line. 
  // Convert String into an array of integers using ',' as a delimiter
  stroke(0);

  // Later we'll see how we can do this with the Table class
  data = int(split(stuff[0], ','));
}

function draw() {
  background(255);
  vizMouseOver();
}

function vizMouseOver() {
  for (var i = 0; i < data.length; i++) {
    // The array of ints is used to set the color and height of each rectangle.
    var x = map(i, 0, data.length, 0, width)

    fill(data[i]);
    rect(x, 0, 20, data[i]);
    
    if (mouseX >= x && mouseX <= x + 20) {
      fill(255);
      text(data[i], x, data[i]);
    }
  }
}