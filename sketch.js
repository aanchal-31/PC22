
//name-spacing
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;

var engine,world,ground,ball;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,400,400,40,ground_options);

  World.add(world,ground);
 
  var ball_options={

    restitution:1
  }

  ball=Bodies.rectangle(200,200,40,40,ball_options);
  World.add(world,ball);

  //console.log(object);

  //console.log(object.position.y);



}
function draw()
{
  background(0);
Engine.update(engine);

  rectMode(CENTER);
    //rect(200,200,50,50);
    rect(ground.position.x,ground.position.y,400,40);

    rect(ball.position.x,ball.position.y,40,40);
  
}
