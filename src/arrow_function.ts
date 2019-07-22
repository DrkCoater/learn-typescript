// let log = function(message) {
//   console.log(message);
// }

// let doLog = message => console.log(message);

// log("hello typescript");
// doLog("hello typescript again.");



function testScope() {
  this.abc = "hello";

  function abc() {
    console.log(this);
  }
}

testScope();
