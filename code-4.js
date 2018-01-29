// Modern-Day Mondrian

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  line (100, 400, 100, 200);
  line (20, 500, 20, 0);
  line (0, 0, 0, 400);
  line (500, 55, 10, 55);

// Rectangle
      strokeWeight (4);
      rect(100, 100, 55, 100);
      fill (255, 0, 0);
  
// Rectangle
      strokeWeight (2);
      rect(200, 200, 200, 100);
      fill (0, 0, 255);
  
 // Rectangle
      strokeWeight (2);
      rect(0, 200, 200, 100);
      fill (255, 0, 0);
  
// Rectangle
      strokeWeight (1);
      rect(0, 300, 55, 55);
      fill (255, 255, 0);
    
// Rectangle
      strokeWeight (4);
      rect(300, 0, 55, 55);
      fill (255, 255, 255);
  
// Rectangle
      strokeWeight (4);
      rect(0,0, 100, 100);
      fill (255, 255, 0);
	
}
