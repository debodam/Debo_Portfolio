import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./style.css";

let angle;
let branchColor;

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 6;
    branchColor = p5.color("#76abae"); // Updated color
    p5.stroke(branchColor);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(p5.width / 2, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.02), -1, 1, p5.PI / 3, p5.PI / 8); // Vary angle
    branch(120, 14); // Increased line thickness for more visibility
  };

  function branch(len, thickness) {
    p5.strokeWeight(thickness);
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 5) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.65, thickness * 0.7); // Increased branching depth
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.65, thickness * 0.7); // Increased branching depth
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
