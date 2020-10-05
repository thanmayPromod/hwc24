
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var ball1
var d1,d2,d3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1=new Ground(300,600,1000,10)
  ball1=new Paper(100,570,40)
  d1=new Ground(600,570,200,30)
  d2=new Ground(520,505,30,100)
  d3=new Ground(680,505,30,100)
	Engine.run(engine);
  
}


function draw() {
  keypressed()
  rectMode(CENTER);
  background(0);
  ground1.display();
  ball1.display();
  d1.display();
  d2.display();
  d3.display();
  drawSprites();
 
}
function keypressed(){
if (keyDown===UP_ARROW){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
}
}