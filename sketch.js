let inc = 0.02;
let start = 1;
let dColor;
let sx;
let sy;
let mx;
let my;
let r;

let armc;
let thick;
let armLeft;
let cHeight;
let armHeight;
let armWidth;
let boolRight;
let boolLeft;
let cacScale;

let cactus;
let cactus1;
let cactus2;
let cactus3;
let cactus4;

let myFont;

function preload(){
  myFont = loadFont('NationalPark-Heavy.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  cactus = new Arm();
  cactus1 = new Arm();
  cactus2 = new Arm();
  cactus3 = new Arm();
  cactus4 = new Arm();

  textFont(myFont);
  textSize(36);

  noLoop();
}

//sky
function draw() {
  background(16, 51, 33);
  // background(94, 31, 50);
  noStroke();
  for (let x = 100; x < windowWidth-100; x += 3) {
    for (let y = 100; y < windowHeight - 100; y += 3) {
      let noiseVal = noise(x / 200, y / 20);
      // print(noiseVal);
      if (0.4 > noiseVal && noiseVal > 0.2) {
       fill(16, 44, 93);
      }
      if (0.5 > noiseVal && noiseVal > 0.4) {
        
        fill(256, 16, 68);
      } 
    if (noiseVal > 0.5) {
      fill(5, 52, 91);
      }
      rect(x, y, 25, 25);
    }
  }
  noStroke();

  drawMountain();
  
  // ground 
  // fill(218, 48, 27);
  // fill(228, 39, 41);
  fill(231, 38, 23);
  rect(windowWidth/2, windowHeight/2 + 275, windowWidth-200, windowHeight/6);
  noFill();

  //cactuses
  cactus.display();
  cactus1.display();
  cactus2.display();
  cactus3.display();
  cactus4.display();


  //frame 
  noFill();
  strokeWeight(25); 
  stroke(166, 30, 71);
  rect(windowWidth/2, windowHeight/2, windowWidth-200, windowHeight-200);

  noStroke();
  // fill(166, 30, 71);
  fill(18, 54, 70);
  text("a love letter to my home", 200, 50);
}

function drawMountain() {


  fill(0);
  let dark = [color(27, 38, 91), color(18, 85, 52)];
  dColor = dark[int(random(dark.length))];
  let gradient = drawingContext.createLinearGradient(
    windowWidth/2 , 300,  windowWidth/2, windowHeight - 300);

  gradient.addColorStop(0.25,color(18, 53, 72));
  gradient.addColorStop(0, color(24, 30, 87));
  gradient.addColorStop(1, color(18, 85, 52));
  gradient.addColorStop(0.5, color(18, 54, 70));
  drawingContext.fillStyle = gradient;

  // beginShape();
  // for (let x = 100; x < windowWidth/2 - 200; x += 3){
  //   let y = (noise(xoff) * height*2/3);
  //   vertex(x, y);
  //   xoff += inc;
  // }
  // vertex(windowWidth/2 - 100, windowHeight - 100);
  // vertex(100, windowHeight - 100);
  // endShape();


  beginShape();
  let xoff = start;
  for (let x = 100 ; x < windowWidth - 100; x += 3) {

    noStroke();
    let y = (noise(xoff) * height*2/3);
    vertex(x, y + 100);
    xoff += inc;
  }
  vertex(windowWidth-100, windowHeight - 100);
  vertex(100, windowHeight - 100);
  endShape();

  //dark mountain
  fill(218, 48, 27, 80);

  beginShape();
  // let r = random(windowWidth/3, windowWidth/2 + 200);
  for (let x = windowWidth/2 + 200; x < windowWidth - 100; x += 3){
    let y = (noise(xoff) * height*2/3);
    vertex(x, y + 200);
    xoff += inc;
  }
  vertex(windowWidth-100, windowHeight - 100);
  vertex(windowWidth/2 + 100, windowHeight - 100); 
  
  endShape();
}

class Arm {
  constructor(name) {
    this.x = random(150/0.6, (windowWidth-150)/0.6);
    this.y = random(650/0.6, (windowHeight - 125)/0.6);
    this.thick = random(22, 32);
    this.armc = random(75, 125);
    this.armWidth = random(20, 55);
    this.armHeight = random(150, 200);
    this.armLeft = random(130, 170);
    this.cHeight = random(175, 225);
    this.boolRight = random(0, 100);
    this.boolLeft = random(0, 100);
    // this.cacScale = random(0.8, 1);
  }

  display() {
    noFill();

    push();
    scale(0.6);
    strokeWeight(this.thick);
    stroke(94, 31, 50, 85);
    line(this.x, this.y, this.x, this.y - this.cHeight);

    //right arm

    if (this.boolRight > 20) {
      beginShape();
      vertex(this.x, this.y - this.armc);
      vertex(this.x + this.armWidth, this.y - this.armc);
      vertex(this.x + this.armWidth, this.y - this.armHeight);
      endShape();

      //another arm
      // beginShape();
      // vertex(this.x, this.y - this.armc);
      // vertex(this.x + 40, this.y - this.armc - 20);
      // vertex(this.x + 40, this.y - this.armc - 60);
      // endShape();
    }

    //left arm

    if (this.boolLeft > 10) {
      beginShape();
      vertex(this.x, this.y - this.armc);
      vertex(this.x - this.armWidth, this.y - this.armc);
      vertex(this.x - this.armWidth, this.y - this.armLeft);
      endShape();
    }


    pop();
  }
}