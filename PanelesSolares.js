function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Solar panel properties
  let panelWidth = 120;
  let panelHeight = 60;
  let gap = 10;
  let rows = 3;
  let cols = 4;
  
  // Starting positions
  let startX = (width - (cols * panelWidth + (cols - 1) * gap)) / 2;
  let startY = (height - (rows * panelHeight + (rows - 1) * gap)) / 2;
  
  // Draw solar panels
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = startX + j * (panelWidth + gap);
      let y = startY + i * (panelHeight + gap);
      drawPanel(x, y, panelWidth, panelHeight);
    }
  }
}

function drawPanel(x, y, w, h) {
  fill(50, 150, 250);
  stroke(0);
  rect(x, y, w, h);
  
  // Draw lines to represent the cells within the panel
  stroke(200);
  let cellCols = 4;
  let cellRows = 2;
  for (let i = 1; i < cellCols; i++) {
    line(x + i * w / cellCols, y, x + i * w / cellCols, y + h);
  }
  for (let i = 1; i < cellRows; i++) {
    line(x, y + i * h / cellRows, x + w, y + i * h / cellRows);
  }
}

function draw() {
  // No drawing code needed here
}
