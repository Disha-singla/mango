class Tree{
    constructor(x, y, width, height){
        var Opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,Opt)
        this.w=width;
        this.h=height;
        World.add(world,this.body)
        this.image = loadImage("tree.png");
      }
      display(){
      push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }