class Rope{
    constructor(bodyA, pointB){

        var options= {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        };

        this.body= Constraint.create(options);
        this.pointB= pointB;
        World.add(world,this.body);
    }

    attach(body){
        this.body.bodyA= body;
    }

    fly(){
        this.body.bodyA= null;
    }



    display(){

        if(this.body.bodyA){
            var pointA= this.body.bodyA.position
            var pointB= this.pointB;
            stroke(48,22,8);
            strokeWeight(4);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
        }
    }
}