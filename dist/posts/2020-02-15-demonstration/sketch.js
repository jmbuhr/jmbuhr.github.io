
let rightscore = 0;
let leftscore = 0;

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent("sketch-holder");
  ding = loadSound("https://raw.githubusercontent.com/CodingTrain/website/master/CodingChallenges/CC_067_Pong/P5/data/ding.mp3");
  puck = new Puck();
  left = new Paddle(true);
  right = new Paddle(false);
}

function draw() {
  background(0);

  puck.checkPaddleLeft(left);
  puck.checkPaddleRight(right);

  left.show();
  right.show();
  left.update();
  right.update();

  puck.update();
  puck.edges();
  puck.show();

  fill(255);
  textSize(32);
  text(leftscore, 32, 40);
  text(rightscore, width - 64, 40);
}

function keyReleased() {
  left.move(0);
  right.move(0);
}

function keyPressed() {
  if (key == 'w') {
    left.move(-10);
  } else if (key == 's') {
    left.move(10);
  }

  if (key == 'o') {
    right.move(-10);
  } else if (key == 'l') {
    right.move(10);
  }
}
