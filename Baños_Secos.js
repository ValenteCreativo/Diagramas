function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Dry toilet properties
  let toiletWidth = 150;
  let toiletHeight = 200;
  let seatWidth = 120;
  let seatHeight = 40;
  let liquidHeight = 80;
  let solidHeight = 80;
  let ventHeight = 100;
  let centerX = width / 2;
  let centerY = height / 2;
  
  drawSelfContainedDryToilet(centerX, centerY, toiletWidth, toiletHeight, seatWidth, seatHeight, liquidHeight, solidHeight, ventHeight);
}

function drawSelfContainedDryToilet(x, y, toiletW, toiletH, seatW, seatH, liquidH, solidH, ventH) {
  // Toilet body
  fill(200);
  stroke(0);
  rect(x - toiletW / 2, y - toiletH / 2, toiletW, toiletH);
  
  // Toilet seat
  fill(230);
  rect(x - seatW / 2, y - toiletH / 2 - seatH / 2, seatW, seatH);
  
  // Separation inside
  fill(150, 150, 150, 150); // Semi-transparent gray
  rect(x - toiletW / 2, y - toiletH / 2 + seatH, toiletW, solidH);
  
  // Liquid waste container
  fill(0, 100, 200, 150); // Semi-transparent blue
  rect(x - toiletW / 2, y - toiletH / 2 + seatH + solidH, toiletW, liquidH);
  
  // Solid waste container
  fill(100, 50, 0, 150); // Semi-transparent brown
  rect(x - toiletW / 2, y - toiletH / 2 + seatH, toiletW, solidH);
  
  // Ventilation pipe
  fill(100);
  rect(x + toiletW / 2 - 5, y - toiletH / 2 - ventH, 10, ventH + seatH / 2);
  
  // Labels for clarity
  drawLabels(x, y, toiletW, toiletH, seatW, seatH, liquidH, solidH, ventH);
}

function drawLabels(x, y, toiletW, toiletH, seatW, seatH, liquidH, solidH, ventH) {
  fill(0);
  textSize(12);
  
  // Base label
  text("Toilet Body", x - toiletW / 2 - 60, y + toiletH / 2 - 10);
  
  // Seat label
  text("Toilet Seat", x - seatW / 2 - 60, y - toiletH / 2 - seatH / 2);
  
  // Separation compartment label
  text("Separation", x - toiletW / 2 - 100, y - toilet
  
  // Liquid waste container label
  text("Liquid Waste", x - toiletW / 2 - 100, y - toiletH / 2 + seatH + solidH + 30);
  
  // Solid waste container label
  text("Solid Waste", x - toiletW / 2 - 100, y - toiletH / 2 + seatH + 30);
  
  // Ventilation pipe label
  text("Ventilation Pipe", x + toiletW / 2 + 20, y - toiletH / 2 - ventH / 2);
}

function draw() {
  // No drawing code needed here
}
