function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Turbine properties
  let baseWidth = 20;
  let baseHeight = 150;
  let bladeLength = 80;
  let centerX = width / 2;
  let centerY = height / 2;
  
  drawWindTurbine(centerX, centerY, baseWidth, baseHeight, bladeLength);
}

function drawWindTurbine(x, y, baseW, baseH, bladeL) {
  // Turbine base
  fill(150);
  stroke(0);
  rect(x - baseW / 2, y - baseH / 2, baseW, baseH);
  
  // Turbine hub (nacelle)
  fill(100);
  ellipse(x, y - baseH / 2, 20, 20);
  
  // Turbine blades
  drawBlades(x, y - baseH / 2, bladeL);
  
  // Generator
  fill(50);
  rect(x - 10, y + baseH / 2 - 40, 20, 40);
  
  // Transmission shaft
  stroke(0);
  line(x, y - baseH / 2, x, y + baseH / 2 - 40);
  
  // Airflow indicators
  drawAirflow(x, y - baseH / 2, bladeL);
  
  // Energy indicators
  drawEnergyFlow(x, y + baseH / 2 - 40);
  
  // Labels for clarity
  drawLabels(x, y, baseW, baseH, bladeL);
}

function drawBlades(x, y, length) {
  stroke(0);
  fill(200);

  for (let i = 0; i < 3; i++) {
    push();
    translate(x, y);
    rotate(TWO_PI / 3 * i);
    beginShape();
    vertex(0, 0);
    vertex(length, -10);
    vertex(length, 10);
    endShape(CLOSE);
    pop();
  }
}

function drawAirflow(x, y, bladeL) {
  stroke(0, 0, 255);
  noFill();
  for (let i = 0; i < 3; i++) {
    arc(x - bladeL - 20, y, 40, 40, PI / 6 + i * TWO_PI / 3, PI / 6 + i * TWO_PI / 3 + PI / 3);
  }
}

function drawEnergyFlow(x, y) {
  stroke(255, 0, 0);
  line(x, y, x, y + 40);
  line(x - 5, y + 35, x + 5, y + 35);
}

function drawLabels(x, y, baseW, baseH, bladeL) {
  fill(0);
  textSize(12);
  
  // Base label
  text("Base", x - baseW / 2 - 30, y + baseH / 2 - 60);
  
  // Hub label
  text("Nacelle (Hub)", x - 60, y - baseH / 2 - 10);
  
  // Blade labels
  text("Blade", x + bladeL + 10, y - baseH / 2 - 10);
  
  // Generator label
  text("Generator", x - 40, y + baseH / 2 + 10);
  
  // Shaft label
  text("Transmission Shaft", x + 10, y);
  
  // Airflow label
  text("Airflow", x - bladeL - 60, y + 10);
  
  // Energy label
  text("Energy Output", x - 70, y + baseH / 2 + 50);
}

function draw() {
  // No drawing code needed here
}
