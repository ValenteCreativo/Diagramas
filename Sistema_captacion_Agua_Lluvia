function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Rainwater harvesting system properties
  let roofWidth = 300;
  let roofHeight = 100;
  let tankWidth = 150;
  let tankHeight = 200;
  let startX = (width - roofWidth) / 2;
  let startY = (height - roofHeight - tankHeight - 50) / 2;

  drawRainwaterSystem(startX, startY, roofWidth, roofHeight, tankWidth, tankHeight);
}

function drawRainwaterSystem(x, y, roofW, roofH, tankW, tankH) {
  // Roof
  fill(150);
  stroke(0);
  quad(x, y, x + roofW, y, x + roofW - 30, y + roofH, x + 30, y + roofH);
  
  // Gutters
  fill(100);
  rect(x + 20, y + roofH, roofW - 40, 10);
  rect(x + roofW - 30, y + roofH, 10, 30);
  
  // Tank
  fill(50, 150, 200);
  rect(x + roofW - tankW - 20, y + roofH + 30, tankW, tankH);
  fill(0);
  text("Storage Tank", x + roofW - tankW - 20 + 10, y + roofH + 30 + tankH / 2);
  
  // Downspout
  fill(100);
  rect(x + roofW - 30 + 10, y + roofH + 30, 10, tankH - 10);
  
  // Overflow pipe
  fill(100);
  rect(x + roofW - tankW - 20 + tankW - 20, y + roofH + 30 + tankH, 20, 50);
  fill(0);
  text("Overflow", x + roofW - tankW - 20 + tankW - 50, y + roofH + 30 + tankH + 30);
  
  // Water flow arrows
  drawArrows(x, y, roofW, roofH, tankH);
}

function drawArrows(x, y, roofW, roofH, tankH) {
  stroke(0);
  fill(0);
  
  // Arrow for rainwater on roof
  let arrowX = x + roofW / 2;
  let arrowY = y - 20;
  let arrowSize = 10;
  line(arrowX, arrowY, arrowX, y);
  triangle(arrowX - arrowSize, arrowY + arrowSize, arrowX + arrowSize, arrowY + arrowSize, arrowX, arrowY);

  // Arrow for water flow into the tank
  arrowX = x + roofW - 20;
  arrowY = y + roofH + 40;
  line(arrowX, y + roofH + 10, arrowX, arrowY);
  triangle(arrowX - arrowSize, arrowY - arrowSize, arrowX + arrowSize, arrowY - arrowSize, arrowX, arrowY);
  
  // Arrow for overflow
  arrowX = x + roofW - 40;
  arrowY = y + roofH + 30 + tankH + 40;
  line(arrowX, y + roofH + 30 + tankH + 10, arrowX, arrowY);
  triangle(arrowX - arrowSize, arrowY - arrowSize, arrowX + arrowSize, arrowY - arrowSize, arrowX, arrowY);
}

function draw() {
  // No drawing code needed here
}

