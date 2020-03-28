x = 1;
easing = 0.05;

function setup() {
  createCanvas(700, 400);
  
}

function draw() {
   a = map(mouseX, 0, 200, 0, 255);
  b = map(mouseX, 200, 400, 255, 0);
  c = map(mouseX, 400, 600, 0, 255);
  background(a,b,c);
 
  targetX = mouseX;
  dx = targetX - x;
  x += dx * easing;
  
  fill(200);
  rect(x, 133, 100, 125);
  square(x+23, 75,55);
  rect(x+103, 133, 25, 105);
  rect(x-28, 133, 25, 105);
  rect(x+13, 260, 35, 105);
  rect(x+51, 260, 35, 105);
  fill(50);
  circle(x+37, 95, 15);
  circle(x+63, 95, 15);
 
  arc(x+50,110, 20, 20, 0, PI );
}
