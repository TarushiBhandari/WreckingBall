class Box{
    constructor(x,y,w,h){

        var options= {
            restitution: 0.4,
            friction: 0.8,
            density: 1.2,
            isStatic: false
        };

        this.body= Bodies.rectangle(x,y,w,h,options);
        this.width= w;
        this.height= h;
        this.color= color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
    }
}