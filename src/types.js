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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
var foregroundColor = Color.Red;
// assertion
var message;
message = "abc";
var startsWithA = message.lastIndexOf("c");
var startsWithA_2 = message.lastIndexOf("c");
