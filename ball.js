class Ball{
    constructor(x,y,width,height)
    {
      var options = {
       frictionAir:0.005,
       density:1
      }
      
      this.ball = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world , this.ball)
    }

    display()
    {
      var pos = this.ball.position;
      var angle = this.ball.angle;
      push();
      translate(pos.x , pos.y);
      rotate(angle);
      fill("pink"); 
      ellipse(0 , 0 , this.width , this.height);
      pop();
    }
}