class Point {
  // public
  // private
  // protected
  private x: number = 0 ;
  private y: number = 0;

  constructor(x: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    //..
    console.log("X: " + this.x, "Y: " + this.y);
  }
}

let point: Point = new Point(1, 2);
point.draw();
