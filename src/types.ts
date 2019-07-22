// let count = 4;
// count = "a";


// let a: string;
// a = 1;
// a = true;
// a = "a";

// Array with element types
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, "aa", false];

// enum
enum Color { Red = 0, Green = 1, Blue=2 };
let backgroundColor = Color.Blue;
let foregroundColor = Color.Red;

// assertion
let message;
message = "abc";

let startsWithA = (<string>message).lastIndexOf("c");
let startsWithA_2 = (message as string).lastIndexOf("c");
