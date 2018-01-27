// Fading Circles

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(30, random(100), random(100));
  ellipse(random(width), random(height), random(20, 40));
}

// Fading Circles beginShape: Cannot figure this one out.
