var stuff, data;
var rectWidth;

var maxImages = 10; // Total # of images
var imageIndex = 0; // Initial image to be displayed is the first
// Declaring an array of images.
var images = new Array(maxImages);

function preload() {
  // The text from the file is loaded into an array. 
  stuff = loadStrings("data/data.txt");
  
  // Loading the images into the array
  // Don't forget to put the JPG files in the data folder!
  for (var i = 0; i < images.length; i++) {
    images[i] = loadImage("data/animal" + i + ".jpg");
  }
}

function setup() {
  createCanvas(480, 270);
  noStroke();

  data = int(split(stuff[0], ','));
  rectWidth = width/data.length-1;
}

function draw() {
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length, 0, width)
    image(images[i], x, 0);

    fill(255,255,255,data[i]);
    rect(x, 0, rectWidth, data[i]);
  }
}