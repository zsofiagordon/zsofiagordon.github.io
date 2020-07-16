var clicks = 0;
var auto = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkslategray");

  fill("cornflowerblue");

  drawTitle();

  textSize(15);
  text("Current Count: " + clicks, 200, 200);

  drawTriangle();

  drawCircle();

  fill("cornflowerblue");

  drawAuto();
  
  if(auto && frameCount % 60 === 0){
    clicks += 2;
  }
}

function drawCircle() {
  /*
  ellipse parameters:
  x-coord of center
  y-coord of center
  x-length
  y-length
  */
  noStroke();
  ellipse(200, 100, 100, 100);

  // create gray text on button
  fill("darkslategray");
  text("CLICK", 200, 100);
}

function drawAuto() {
  /*
  ellipse parameters:
  x-coord of center
  y-coord of center
  x-length
  y-length
  */
  noStroke();
  ellipse(200, 250, 120, 80);

  // create gray text on button
  fill("darkslategray");
  if(!auto){
    text("Get an\nAutoclicker\n25 Clicks", 200, 250);
  } else {
    text("You bought\nthe autoclicker!", 200, 250);
  }
}

function drawTitle() {
  // creates clicker game title
  textAlign(CENTER, CENTER);
  textSize(30);
  text("CLICKER GAME", 200, 30);
}

function drawTriangle() {
  beginShape();
  vertex(200, 300);
  vertex(225, 325);
  vertex(175, 325);
  vertex(200, 300);
  endShape();
}

function mouseClicked() {
  clicks++;
  var d = dist(mouseX, mouseY, 200, 250);
  if(d < 80 && clicks > 25 && !auto){
     clicks -= 25;
     auto = true;
  }
}
