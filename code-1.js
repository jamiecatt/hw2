// Analyzing Code: Lines

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
