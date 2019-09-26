var score = 0;
var rock;

let x = 1;
let y = 1;
let easing = 0.07;
//let Bender;

//function preload(){
//  Bender = loadFont('JovannyLemonadBender.otf');
//}

function setup() { 
  createCanvas(800, 600);
  rock = new Rock();
  rock.newLocation();
} 

function draw() { 
  background(51, 1, 88);
  rock.draw();

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  noFill();
  stroke(253, 153, 2);
  strokeWeight(3);
  circle(mouseX, mouseY, 30);
  line(0, y, 1000, y);
  line(x, 0, x, 1000);
  fill(255);

  stroke(0);
  //textFont(Bender);
  textSize(32);
  text("[ Score: " + score + " ]", 20 , 40);
  noStroke();
}

function mousePressed(){
  rock.checkHit(mouseX, mouseY);
}

function Rock() {
  this.size = 40;
  
  this.newLocation = function(){
    this.x = random(0 + this.size / 2, width - this.size / 2);
  	this.y = random(0 + this.size / 2, height - this.size / 2);
  }
  
  this.draw = function(){
    ellipse(this.x, this.y, this.size);
  }
  
  this.checkHit = function(x ,y){
  	if (dist(this.x ,this.y, x, y) < this.size / 2){
      this.newLocation();
      score++;
    }
  }
}