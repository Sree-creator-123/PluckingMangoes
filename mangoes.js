class mango {
    constructor(x, y) {

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.x = x;
        this.y = y;
        this.image = loadImage("mango.png");

        this.mango = Bodies.circle(x, y, 50, options);
        this.r = 50;
        World.add(world, this.mango);

    }

    display() {

        var pos = this.mango.position;

        push()
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0,this.r,this.r);
        pop();

    }
}