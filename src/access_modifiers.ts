class PointA {
  // optional and default paramters
  constructor(private x: number = 0, protected y: number, private z: number) {}

  // default is public
  draw() {
    //..
    console.log("X: " + this.x, "Y: " + this.y, " Z: " + this.z);
  }
}

let pointA: PointA = new PointA(1, 2, 3);
pointA.draw();
