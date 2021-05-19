
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject1;
var bobDiameter=100;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roofObject1=new Roof(470,300,300,30);
 bobObject1=new Bob(570,500,40);
 bobObject2=new Bob(520,500,40);
 bobObject3=new Bob(470,500,40);
 bobObject4=new Bob(420,500,40);
 bobObject5=new Bob(370,500,40);

rope1=new Rope(bobObject1.body,roofObject1.body,100,0);
rope2=new Rope(bobObject2.body,roofObject1.body,50,0);
rope3=new Rope(bobObject3.body,roofObject1.body,0,0);
rope4=new Rope(bobObject4.body,roofObject1.body,-50,0);
rope5=new Rope(bobObject5.body,roofObject1.body,-100,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  roofObject1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function KeyPressed(){
if (keyCode === UP_ARROW)
Matter.body.applyForce(bobObject5.body,bobObject5.body.position,{x:-50,y:-45});
}



