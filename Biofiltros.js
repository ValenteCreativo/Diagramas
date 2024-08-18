function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Biofilter properties
  let filterWidth = 200;
  let filterHeight = 300;
  let startX = (width - filterWidth) / 2;
  let startY = (height - filterHeight) / 2;

  drawBiofilter(startX, startY, filterWidth, filterHeight);
}

function drawBiofilter(x, y, w, h) {
  // Outer container
  fill(200);
  stroke(0);
  rect(x, y, w, h);
  
  // Layers of the biofilter
  let layerHeight = h / 3;

  // Sand layer
  fill(244, 164, 96);
  rect(x, y + 2 * layerHeight, w, layerHeight);
  
  // Gravel layer
  fill(169, 169, 169);
  rect(x, y + layerHeight, w, layerHeight);
  
  // Activated carbon layer
  fill(105, 105, 105);
  rect(x, y, w, layerHeight);
  
  // Water flow arrows
  drawArrows(x, y, w, h);
}

function drawArrows(x, y, w, h) {
  stroke(0);
  fill(0);
  
  let arrowY = y - 20;
  let arrowX = x + w / 2;
  let arrowSize = 10;
  
  // Inflow arrow
  line(arrowX, arrowY, arrowX, y);
  triangle(arrowX - arrowSize, arrowY + arrowSize, arrowX + arrowSize, arrowY + arrowSize, arrowX, arrowY);

  // Outflow arrow
  arrowY = y + h + 20;
  line(arrowX, y + h, arrowX, arrowY);
  triangle(arrowX - arrowSize, arrowY - arrowSize, arrowX + arrowSize, arrowY - arrowSize, arrowX, arrowY);
}

function draw() {
  // No drawing code needed here
}
