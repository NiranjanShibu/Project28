class Mango{
  constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic: true
      }
      this.body = Bodies.circle(x, y, r, options);
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("images/mango.png");
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, this.r);
    }
}