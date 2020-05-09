// You could have multiple flags like: start, launch to indicate the state of the game.



//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




//var gamestate

var tanker,ground,shootingball,bubble;

var world,engine;

var angle = 0;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

maris the same as c
onst Engine = Matter.Engine

*/

function setup() {
    createCanvas(400,400)


 engine = Engine.create();

world = engine.world;

ground = new Ground(width/2,height-10,width,30);
tanker = new Tanker(75,height-110,60,30);

ball1 = new Ball(400,50,20);
ball2 = new Ball(500,100,20);
ball3 = new Ball(600,150,20);
cannonBall = new CannonBall(20,20);
shot  = new ShootBall(cannonBall.body,{x:70,y:height-220})

//shootingball = new ShootBall(tanker,tanker,40,40);
//bubble - new Ball(20,300,20,20);


    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
background("red");
Engine.update(engine);

ground.display();
tanker.display();

cannonBall.display();
shot.display();



ball1.display();
ball2.display()
ball3.display();

if(keyIsDown(UP_ARROW)){

shot.attach(cannonBall.body)

}
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    if(keyCode === DOWN_ARROW ){


//ShootBall.velocityX = 4;
//ShootBall.velocityY = 4;
gamestate = "launch";

shot.shoot()


    }
    }


    // Call the shoot method for the cannon
