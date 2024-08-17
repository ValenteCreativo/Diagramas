 function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Biodigester properties
  let digesterWidth = 200;
  let digesterHeight = 300;
  let startX = (width - digesterWidth) / 2;
  let startY = (height - digesterHeight) / 2;

  drawBiodigester(startX, startY, digesterWidth, digesterHeight);
}

function drawBiodigester(x, y, w, h) {
  // Outer container
  fill(150);
  stroke(0);
  rect(x, y, w, h);
  
  // Input pipe
  fill(100);
  rect(x - 50, y + h / 3, 50, 20);
  fill(0);
  text("Waste In", x - 80, y + h / 3 + 15);
  
  // Output pipes
  fill(100);
  rect(x + w, y + h / 3, 50, 20);
  fill(0);
  text("Biogas Out", x + w + 60, y + h / 3 + 15);
  
  fill(100);
  rect(x + w, y + 2 * h / 3, 50, 20);
  fill(0);
  text("Fertilizer Out", x + w + 60, y + 2 * h / 3 + 15);
  
  // Bacteria representation
  drawBacteria(x, y, w, h);
  
  // Arrows for flow
  drawArrows(x, y, w, h);
}

function drawBacteria(x, y, w, h) {
  fill(50, 205, 50);
  noStroke();
  ellipse(x + w / 2, y + h / 2, 30, 30);
  ellipse(x + w / 3, y + h / 3, 20, 20);
  ellipse(x + 2 * w / 3, y + 2 * h / 3, 20, 20);
}

function drawArrows(x, y, w, h) {
  stroke(0);
  fill(0);
  
  // Inflow arrow
  let arrowY = y + h / 3 + 10;
  line(x - 50, arrowY, x, arrowY);
  triangle(x - 10, arrowY - 5, x, arrowY, x - 10, arrowY + 5);
  
  // Biogas outflow arrow
  arrowY = y + h / 3 + 10;
  line(x + w, arrowY, x + w + 50, arrowY);
  triangle(x + w + 40, arrowY - 5, x + w + 50, arrowY, x + w + 40, arrowY + 5);
  
  // Fertilizer outflow arrow
  arrowY = y + 2 * h / 3 + 10;
  line(x + w, arrowY, x + w + 50, arrowY);
  triangle(x + w + 40, arrowY - 5, x + w + 50, arrowY, x + w + 40, arrowY + 5);
}

function draw() {
  // No drawing code needed here
}
