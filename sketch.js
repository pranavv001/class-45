const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;
var level = 1
var ball
var goal
var level1,level2


var engine, world, body;
var canJump;

var charges;

function setup() {
  //create the canvas
  createCanvas(1200,250);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  ball = new Ball(100, 225, 25, 25);

  //create the floor
  wall1 = new Ground(600, 240, 1200,20);
  wall2 = new Ground(600, 10, 1200,20);
  wall3 = new Ground(10, 125, 20,400);
  wall4 = new Ground(1190, 125, 20,400);
  goal = new Goal(1100,230)
  level1 = new Level1()
  
  }



function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);
  
  //display ground

  if (level === 1) {
    level1.display()
    level1.checkCollision()
    if (ball.body.position.x>1050&&ball.body.position.y>180) {
      level2 = new Level2()
      level = 2
      Matter.Body.setPosition(ball.body,{x:100,y:225})
      goal.rePosition(1100,150)
      level1.remove()
    }
    if (level === 2) {
      level2.display()
    }
  }

wall1.display()
wall2.display()
wall3.display()
wall4.display()
ball.display()
goal.display()
}


function keyPressed(){
 if(keyCode === 39 ){
  ball.flingForward();
 
 }
 if(keyCode === 38 ){
  ball.flingUp();
 
 }
 if(keyCode === 37 ){
  ball.flingBack();
 
 }
 
}
