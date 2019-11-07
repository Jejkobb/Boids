var boids = [];

var viewRadius = 50;

function setup() {
  // put setup code here
  createCanvas(800, 550);

  //create Boids
  for(var i = 0; i < 30; i++){
    boids.push(new Boid(Math.random()*width, Math.random()*height));
    boids[i].r = 7;
    boids[i].speed = 3;
    boids[i].heading = Math.random() * 360;
  }
}

function getDistance(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function getAngle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

function draw() {
  // put drawing code here
  background(51);
  for(var i = 0; i < boids.length; i++){
    boids[i].render();
    boids[i].update();
    boids[i].turn();

    //wall detection
    boids[i].pos.x = boids[i].pos.x % 800;
    boids[i].pos.y = boids[i].pos.y % 550;
    if(boids[i].pos.x < 0){
      boids[i].pos.x = 800;
    }
    if(boids[i].pos.y < 0){
      boids[i].pos.y = 550;
    }

    for(var j = 0; j < boids.length; j++){
      if(i != j){
        var obj = {x1: boids[i].pos.x, y1: boids[i].pos.y, x2: boids[j].pos.x, y2: boids[j].pos.y};
        var d = getDistance(obj.x1, obj.y1, obj.x2, obj.y2);
        var rot = getAngle(obj.x1, obj.y1, obj.x2, obj.y2);
        if(d < viewRadius){

        }
      }
    }
  }
}
