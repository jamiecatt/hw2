// 1. ------------------------------------------

// Lines

function setup() {
  createCanvas(340, 340);
}
function draw() {
var steps = 0;
  createCanvas (340,340)
while (steps < 10) {
  steps = steps + 1;
  line(random(width), random(height), random(width), random(height));

}
}
// Modify to end this loop at 10 lines.

// 2. ------------------------------------------

// More Lines: Challenge A

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(170, 170, random(width), random(height));
}

// More Lines: Challenge B
function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(340, 0, random(width), random(height));
}

// More Lines: Challenge C
  Cannot figure this one out.
  
// 3. ------------------------------------------

// Fading Circles
background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(30, random(100), random(100));
  ellipse(random(width), random(height), random(20, 40));
}

// Fading Circles beginShape
  Cannot figure this one out yet.
  
  
  // 4. ------------------------------------------

// Modern Day Mondrian
