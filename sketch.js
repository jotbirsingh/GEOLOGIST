const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer,ground,stone,rubber;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(400,200);
	ground = new Ground(600,height,1200,20)
    stone = new Stone(400,200,100,100);
    rubber = new Rubber(600,200,70,70);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  
  drawSprites();
 
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
}



