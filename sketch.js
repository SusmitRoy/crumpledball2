
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, box1, box2, box3;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);

	box1 = new Box(680, 670, 200, 20);

	box2 = new Box(580, 620, 20, 100);

	box3 = new Box(780, 620, 20, 100);

	ball = new Paper(200, 350);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85, y:-85});
	}else if(keyDown(DOWN_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-85, y:-85});
	}
}



