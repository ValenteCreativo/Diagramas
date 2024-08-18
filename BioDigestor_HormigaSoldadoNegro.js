 function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Biodigester properties
  let digesterWidth = 300;
  let digesterHeight = 200;
  let inputChamberHeight = 50;
  let separationHeight = 30;
  let larvaCollectionHeight = 30;
  let compostHeight = 60;
  let ventHeight = 150;
  let drainHeight = 30;
  let centerX = width / 2;
  let centerY = height / 2;
  
  drawBiodigester(centerX, centerY, digesterWidth, digesterHeight, inputChamberHeight, separationHeight, larvaCollectionHeight, compostHeight, ventHeight, drainHeight);
}

function drawBiodigester(x, y, digesterW, digesterH, inputH, sepH, larvaH, compostH, ventH, drainH) {
  // Biodigester body
  fill(200);
  stroke(0);
  rect(x - digesterW / 2, y - digesterH / 2, digesterW, digesterH);
  
  // Input chamber
  fill(255, 204, 153); // Light orange
  rect(x - digesterW / 2, y - digesterH / 2 - inputH / 2, digesterW, inputH);
  
  // Separation chamber
  fill(153, 204, 255, 150); // Light blue, semi-transparent
  rect(x - digesterW / 2, y - digesterH / 2 + inputH, digesterW, sepH);
  
  // Larva collection chamber
  fill(255, 255, 153, 150); // Light yellow, semi-transparent
  rect(x - digesterW / 2, y - digesterH / 2 + inputH + sepH, digesterW, larvaH);
  
  // Compost chamber
  fill(153, 255, 153, 150); // Light green, semi-transparent
  rect(x - digesterW / 2, y - digesterH / 2 + inputH + sepH + larvaH, digesterW, compostH);
  
  // Ventilation pipe
  fill(153, 153, 255); // Light purple
  rect(x + digesterW / 2 - 5, y - digesterH / 2 - ventH, 10, ventH + inputH / 2);
  
  // Drainage pipe
  fill(204, 153, 255); // Light pink
  rect(x - digesterW / 2 - 15, y + digesterH / 2 - drainH, 10, drainH);
  
  // Labels for clarity
  drawLabels(x, y, digesterW, digesterH, inputH, sepH, larvaH, compostH, ventH, drainH);
}

function drawLabels(x, y, digesterW, digesterH, inputH, sepH, larvaH, compostH, ventH, drainH) {
  fill(0);
  textSize(12);
  
  // Base label
  text("Biodigester Body", x - digesterW / 2 - 80, y + digesterH / 2 - 10);
  
  // Input chamber label
  text("Input Chamber", x - digesterW / 2 - 100, y - digesterH / 2 - inputH / 2 - 5);
  
  // Separation chamber label
  text("Separation Chamber", x - digesterW / 2 - 140, y - digesterH / 2 + inputH + 20);
  
  // Larva collection chamber label
  text("Larva Collection Chamber", x - digesterW / 2 - 160, y - digesterH / 2 + inputH + sepH + 20);
  
  // Compost chamber label
  text("Compost Chamber", x - digesterW / 2 - 120, y - digesterH / 2 + inputH + sepH + larvaH + 30);
  
  // Ventilation pipe label
  text("Ventilation Pipe", x + digesterW / 2 + 20, y - digesterH / 2 - ventH / 2);
  
  // Drainage pipe label
  text("Drainage Pipe", x - digesterW / 2 - 40, y + digesterH / 2 - drainH / 2 - 5);
  
  // Output products
  text("Output: Biofertilizer (solid)", x - digesterW / 2 - 120, y + digesterH / 2 + 30);
  text("Output: Liquid Fertilizer", x - digesterW / 2 - 140, y + digesterH / 2 + 50);
}

function draw() {
  // No drawing code needed here
}
