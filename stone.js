class stone{
        constructor(x, y){
            var Opt={
                isStatic:false,
                restituition:0,
                fricton:1.0,
                density:1.2
            }
            this.body=Bodies.rectangle(x,y,Opt)
            World.add(world,this.body)
            this.image = loadImage("stone.png");
          }
          display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER)
            image(0, 0, this.width, this.height);
            pop();
          }
          }