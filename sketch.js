
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1;
var tree;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   // tree=new Tree(500,300,20,60);
    ground1 = new ground(500,height,1000,20)
	Engine.run(engine);
  
}


function draw() {
	Engine.updat(engine)
  background("grey");
  ground1.display();
 
}



