
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone, ground, chain, chain1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var world,boy;
var stoneSprite, mango1Sprite, mango2Sprite, mango3Sprite, mango4Sprite, mango5Sprite, mango6Sprite, mango7Sprite, mango8Sprite, mango9Sprite;

function preload(){
	boy=loadImage("images/boy.png");

  tree = loadImage("images/tree.png");
  
  stoneSprite = loadImage("images/stone.png");

  mango1Sprite = loadImage("images/mango.png");

  mango2Sprite = loadImage("images/mango.png");

  mango3Sprite = loadImage("images/mango.png");

  mango4Sprite = loadImage("images/mango.png");

  mango5Sprite = loadImage("images/mango.png");

  mango6Sprite = loadImage("images/mango.png");

  mango7Sprite = loadImage("images/mango.png");

  mango8Sprite = loadImage("images/mango.png");

  mango9Sprite = loadImage("images/mango.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;

	mango1=new Mango(1100, 200, 35);

	mango2=new Mango(1140, 250, 35);

	mango3=new Mango(1010, 170, 35);

	mango4=new Mango(980, 250, 35);

	mango5=new Mango(1080, 140, 35);

	mango6=new Mango(1025, 270, 35);

	mango7=new Mango(1200, 265, 35);

	mango8=new Mango(1050, 220, 35);

	mango9=new Mango(1180, 200, 35);

	ground = new Ground(width/2,600,width,20);

	stone = new Stone(240, 428, 35);

  chain = new Chain(stone.body,{x: 240, y: 428});
  
	keyPressed();
	
	Engine.run(engine);

}

function draw() {

  background(230);

  fill("black");
  text("PRESS SPACE TO GET ANOTHER TRY!", 80, 45);

  image(boy ,200,365,200,300);

  image(tree ,900, 65, 350, 550);

  image(stoneSprite, stone.body.position.x-23, stone.body.position.y-24, 50, 50);

  image(mango1Sprite, mango1.body.position.x-23, mango1.body.position.y-24, 50, 50);

  image(mango2Sprite, mango2.body.position.x-23, mango2.body.position.y-24, 50, 50);

  image(mango3Sprite, mango3.body.position.x-23, mango3.body.position.y-24, 50, 50);

  image(mango4Sprite, mango4.body.position.x-23, mango4.body.position.y-24, 50, 50);

  image(mango5Sprite, mango5.body.position.x-23, mango5.body.position.y-24, 50, 50);

  image(mango6Sprite, mango6.body.position.x-23, mango6.body.position.y-24, 50, 50);

  image(mango7Sprite, mango7.body.position.x-23, mango7.body.position.y-24, 50, 50);

  image(mango8Sprite, mango8.body.position.x-23, mango8.body.position.y-24, 50, 50);

  image(mango9Sprite, mango9.body.position.x-23, mango9.body.position.y-24, 50, 50);

  chain.display();

  detectCollision(stone, mango1);

  detectCollision(stone, mango2);

  detectCollision(stone, mango3);

  detectCollision(stone, mango4);

  detectCollision(stone, mango5);

  detectCollision(stone, mango6);

  detectCollision(stone, mango7);

  detectCollision(stone, mango8);

  detectCollision(stone, mango9);

}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
	
	}
	
function mouseReleased(){
	
		chain.fly();
	
	}

function detectCollision(lstone, lmango){

mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= lmango.r + lstone.r){

		Matter.Body.setStatic(lmango.body, false);

	}

}

function keyPressed(){

if(keyCode === 32){

Matter.Body.setPosition(stone.body, {x:240, y:428});
chain = new Chain(stone.body,{x: 240, y: 428});

}

}
	