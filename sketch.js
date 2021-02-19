
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var trash;
var box1,box2,box3;

function preload()
{
	db = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
	ground = new Ground(400,650,800,20)
    trash= new Paper(100,300,50)
    box1=new Dustbin(570,580,20,120);
    box2=new Dustbin(600,630,90,20);
    box3=new Dustbin(630,580,20,120);
    Launchshot = new LaunchShot(trash.body,{x:100, y:290});

	
  
}


function draw() {
  background("orange");
  Engine.update(engine);
  ground.display();
  trash.display();
  box1.display();
  box2.display();
  box3.display();
  Launchshot.display();
 
  image(db,550,500,120,150);
 
}



function mouseDragged(){
  Matter.Body.setPosition(trash.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Launchshot.fly();
}

