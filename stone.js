class Stone {

  constructor() {

      var options = {
          restitution: 0,
          friction: 1,
          density: 1.2
      }

      this.image = loadImage("stone.png");
      this.body = Bodies.circle(200, 550, 30, options);
      this.r = 30;
      World.add(world, this.body);

  }

  display() {

      var pos = this.body.position;

      push()
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 30, 30);
      pop()

  }
}