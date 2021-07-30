class Rope {

	constructor(body1,body2,pointA,pointB){
		this.pointA = pointA;
		this.pointB = pointB;

		var options = {
			bodyA : body1,
			bodyB : body2,
			pointB : {x:this.pointA, y:this.pointB}

		}

		this.chain = Matter.Constraint.create (options);
        World.add(world,this.chain);

	}

	display (){
		
		 pointA = this.rope.body1.postion;
		 pointB = this.rope.body1.position;
		stokeweight(20)

		line (chain1.chain.pointA.x,chain1.chain.pointA.y,chain1.chain.bodyB.position.x,chain1.chain.bodyB.position.y);	}
}