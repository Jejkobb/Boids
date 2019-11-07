function Boid(x, y){
  this.pos = createVector(x, y);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.speed = 10;
  this.isBoosting = false;

  this.update = function() {
    var force = p5.Vector.fromAngle(this.heading);
    this.pos.add(createVector(force.x * this.speed, force.y * this.speed));
    this.rotation *= 0.80;
  }

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill("#328294");
    noStroke();
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  }

  this.setRotation = function(a) {
    this.rotation = a;
  }

  this.turn = function() {
    this.heading += this.rotation;
  }

}
