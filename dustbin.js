class Box{
    constructor(x, y, width, height){
    
        var options ={
            'restitution': 0,
            'isStatic': true
    
        }
    
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.image = loadImage("dustbingreen.png");
    
        World.add(world,this.body);
    }
    
    display() {
    
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
    
        rectMode(CENTER);
        fill("cyan");
        rect(0, 0, this.width, this.height);
    
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
    }
    }