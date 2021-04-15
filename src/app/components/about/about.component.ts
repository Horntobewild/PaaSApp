import { Component, OnInit } from '@angular/core';
import p5 from 'p5'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  canvas: any;
  sw = 2;
  c = [];
  strokeColor = 0;

  constructor() { }

  ngOnInit(): void {

    const sketch = s => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 100, s.windowHeight - 200);
        //reference to div can be made here
        canvas2.parent('sketch-holder');

        s.background(250);
        s.strokeWeight(this.sw);

        this.c[0] = s.color(100, 150, 0);
        this.c[1] = s.color(255, 50, 0);

        s.rect(0, 0, s.width, s.height);

        s.stroke(this.c[this.strokeColor]);
      };

      s.draw = () => {
        if (s.mouseIsPressed) {
          if (s.mouseButton === s.LEFT) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
          } else if (s.mouseButton === s.CENTER) {
            s.background(250);
          }
        }
      };

      s.mouseReleased = () => {
        // modulo math forces the color to swap through the array provided
        this.strokeColor = (this.strokeColor +1) % this.c.length;
        s.stroke(this.c[this.strokeColor]);
        console.log('color is now ${this.c[this.strokeColor]}');
      };

      s.keyPressed = () => {
        if (s.key === 'c') {
          window.location.reload();
        }
      };

    };

    this.canvas = new p5(sketch)
  };



}
