const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,390,1200,20);

	paper = new Paper(380,380,25);
  
	dustbin1 = new Dustbin(1100,375,100,20);
	dustbin2 = new Dustbin(1040,325,20,120);
	dustbin3 = new Dustbin(1160,325,20,120);
}


function draw() {
  rectMode(CENTER);
  background(220);
  ground.display();
  dustbin1.display();

  paper.display();

  //dustbin2.display();
  //dustbin3.display();

  //keyPressed();
  
  drawSprites();
 
}
function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-113})
	}
}


