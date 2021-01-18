class Stone{
  constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y, r, options);
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("images/stone.png");
      World.add(world, this.body);
    }
    
}