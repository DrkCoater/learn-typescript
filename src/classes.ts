class Point {
  // public
  // private
  // protected
  private x: number;
  private y: number = 0;
  private z: number;

  // optional and default paramters
  constructor(x: number = 0, y?: number, z?: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  draw() {
    //..
    console.log("X: " + this.x, "Y: " + this.y);
  }
}

let point: Point = new Point(1, 2);
point.draw();
