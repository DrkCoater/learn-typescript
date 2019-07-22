

// let drawPoint = (point: {x: number, y: number}) => {
//   // ...
// };

// drawPoint({
//   name: "hello"
// });


// custom type
// pascal naming convension
interface Point {
  x: number,
  y: number
  // draw: (a: number, b: number) => void
}


let drawPoint = (point: Point) => {
  // ...
};

// drawPoint({
//   x: 1.2,
//   y: 2.2
// });
