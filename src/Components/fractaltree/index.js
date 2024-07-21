import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./style.css";

const Sketch = (p5) => {
  const gridSize = 30;
  let grid = [];

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.noLoop(); // Stop the sketch from looping
    for (let x = 0; x < p5.width; x += gridSize) {
      for (let y = 0; y < p5.height; y += gridSize) {
        grid.push({
          x,
          y,
          size: gridSize,
          offsetX: p5.random(1000), // Different start time for each square
          offsetY: p5.random(1000), // Different start time for each square
          color: p5.color(p5.random(255), p5.random(255), p5.random(255)),
          baseSize: gridSize,
        });
      }
    }
  };

  p5.draw = () => {
    p5.background(20);

    grid.forEach((cell) => {
      // Create a dynamic "pop" effect
      const popTime = p5.frameCount * 0.05 + cell.offsetX;
      const popFactor = p5.sin(popTime) * 0.5 + 1.5;
      const size = cell.baseSize * popFactor;
      const alpha = p5.map(p5.sin(popTime * 2 + cell.offsetY), -1, 1, 50, 255);

      p5.fill(
        cell.color.levels[0],
        cell.color.levels[1],
        cell.color.levels[2],
        alpha
      );
      p5.noStroke();
      p5.rect(
        cell.x + p5.sin(popTime * 0.1) * 20,
        cell.y + p5.cos(popTime * 0.1) * 20,
        size,
        size
      );
    });
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
};

const DynamicGrid = () => (
  <div id="dynamic-grid-background">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default DynamicGrid;
