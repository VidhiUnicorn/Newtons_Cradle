const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	Engine.run(engine);
	
	bob1 = Bodies.circle(320,400,40,roof_options);
	bob2 = Bodies.circle(360,400,40,roof_options);
	bob3 = Bodies.circle(400,400,40,roof_options);
	bob4 = Bodies.circle(440,400,40,roof_options);
	bob5 = Bodies.circle(480,400,40,roof_options);
  
	World.add (world,bob1);
	World.add (world,bob2);
	World.add (world,bob3);
	World.add (world,bob4);
	World.add (world,bob5);



	chain1 = new Rope (roof,bob1,-80,0);
	World.add (world,chain1);
	

	chain2 = new Rope (roof,bob2,-80,0);
	World.add (world,chain2);
	
	chain3 = new Rope (roof,bob3,-80,0);
	World.add (world,chain3);
	
	chain4 = new Rope (roof,bob4,-80,0);
	World.add (world,chain4);
	
	chain5 = new Rope (roof,bob5,-80,0);
	World.add (world,chain5);
	
}

function draw() {
   rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);
  

  line (roof.position.x - 80,roof.position.y,chain1.chain.bodyB.position.x,chain1.chain.bodyB.position.y);  
  line (roof.position.x - 40,roof.position.y,chain2.chain.bodyB.position.x,chain2.chain.bodyB.position.y);  
  line (roof.position.x ,roof.position.y,chain3.chain.bodyB.position.x,chain3.chain.bodyB.position.y);  
  line (roof.position.x + 40,roof.position.y,chain4.chain.bodyB.position.x,chain4.chain.bodyB.position.y);  
  line (roof.position.x + 80,roof.position.y,chain5.chain.bodyB.position.x,chain5.chain.bodyB.position.y);  
  
 
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20)
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);

  keypressed();
}

function keypressed (){
	if  (keyCode === UP_ARROW) {
		Body.applyForce(bob1,{x:bob1.position.x,y:bob1.position.y},{x:-2,y:0});
	}

}