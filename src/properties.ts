class PointB {
  // optional and default paramters
  constructor(
    private _x: number = 0,
    protected _y: number,
    private _z: number
  ) {}

  // default is public
  draw() {
    //..
    console.log("X: " + this._x, "Y: " + this._y, " Z: " + this._z);
  }

  get x() {
    return this.x;
  }

  // output target ES2016+ only
  set x(value: number) {
    if (value < 0) throw new Error("value must be greater than 0");
    this._x = value;
  }
}

let pointB: PointB = new PointB(1, 2, 3);
//pointB.setX(10);
pointB.x = 10;
pointB.draw();
