// var i = "10";
// i = 10; // invalid type

function doSomething() {
  for(var i=0; i<10; i++) {
    console.log(i);
  }
  console.log("finally: " + i);
}

doSomething();
