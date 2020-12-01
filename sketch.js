const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


// added function

function preload(){
    boy = loadImage("boy.png");

    tree = loadImage("tree.png");

}
function setup(){
    createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1500,20);

    stone = new Stone();

    slingshot = new SlingShot(stone.body,{x:180,y:530});

    mango1 = new mango(1150, 350);
    mango2 = new mango(1150, 250);
    mango3 = new mango(1200, 200);
    mango4 = new mango(1300, 300);
    mango5 = new mango(1200, 300);
    mango6 = new mango(1100, 300);

}

function draw(){
    background(255);
    Engine.update(engine);
    
    ground.display();

    image(boy, 150, 450, 150, 300);

    image(tree, 1000, 100, 400, 600);

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
   // mango6.display();
    stone.display();
    slingshot.display();

    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);
    detectCollision(stone, mango5);

   
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(stone.body, {x: 220, y: 530});
        slingshot.attach(stone.body);
    }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.mango.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.mango,false);
	}
}