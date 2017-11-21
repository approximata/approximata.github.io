'use strict'

'use strict';

var inputText = "Hoppá fácán! Happy birthday azaz hogy boldog születésnapot vagy mondhatnánk azt is hogy С днем рождения vagy valami ilyesmi";
var fontSizeMax = 20;
var fontSizeMin = 10;
var spacing = 12; // line height
var kerning = 0.5; // between letters

var fontSizeStatic = false;
var blackAndWhite = false;

var img;

function preload() {
  img = loadImage('data/pic180.png');
}

function setup() {
  createCanvas(img.width, img.height);
  textFont('Times');
  textSize(10);
  textAlign(LEFT, CENTER);
  print(img.width + ' • ' + img.height);
}

function draw() {
  background(255);

  var x = 0;
  var y = 10;
  var counter = 0;

  while (y < height) {
    print(y)
    // translate position (display) to position (image)
    img.loadPixels();
    // get current color
    var imgX = round(map(x, 0, width, 0, img.width))
    var imgY = round(map(y, 0, height, 0, img.height))
    var c = color(img.get(imgX, imgY));
    var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);

    push();
    translate(x, y);

    if (fontSizeStatic) {
      textSize(fontSizeMax);
      if (blackAndWhite) {
        fill(greyscale);
      } else {
        fill(c);
      }
    } else {
      // greyscale to fontsize
      var fontSize = map(greyscale, 0, 255, fontSizeMax, fontSizeMin);
      fontSize = max(fontSize, 1);
      textSize(fontSize);
      if (blackAndWhite) {
        fill(0);
      } else {
        fill(c);
      }
    }

    var letter = inputText.charAt(counter);
    text(letter, 0, 0);
    var letterWidth = textWidth(letter) + kerning;
    // for the next letter ... x + letter width
    x += letterWidth;

    pop();

    // linebreaks
    if (x + letterWidth >= width) {
      x = 0;
      y += spacing;
    }

    counter++;
    if (counter >= inputText.length) {
      counter = 0;
    }
  }
  noLoop();
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  // change render mode
  if (key == '1') fontSizeStatic = !fontSizeStatic;
  // change color style
  if (key == '2') blackAndWhite = !blackAndWhite;
  print('fontSizeMin: ' + fontSizeMin + ', fontSizeMax: ' + fontSizeMax + ', fontSizeStatic: ' + fontSizeStatic + ', blackAndWhite: ' + blackAndWhite);
  loop();
}

// function keyPressed() {
//   // change fontSizeMax with arrow keys up/down
//   if (keyCode == UP_ARROW) fontSizeMax += 2;
//   if (keyCode == DOWN_ARROW) fontSizeMax -= 2;
//   // change fontSizeMin with arrow keys left/right
//   if (keyCode == RIGHT_ARROW) fontSizeMin += 2;
//   if (keyCode == LEFT_ARROW) fontSizeMin -= 2;
//   loop();
// }
