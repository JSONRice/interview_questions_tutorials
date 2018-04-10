// string
let myName = 'Max';
// myName = 28; // Not allowed
// number -> 2, 2.14, etc.
let myAge = 27;
// boolean -> true, false
let hasHobbies = false;
// assign types
let myRealAge;
myRealAge = '27';
// array is an object
let hobbies = ["Cooking", "Sports"];
hobbies = [100]; // TS enforces types automatically for arrays unless any[] is applied
// tuples --> ordered array
// let address = ["Superstreet", 99]; // Defaults to any[]
let address = ["New York City", 29193];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Cyan"] = 101] = "Cyan"; // 101
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
// any
let car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName() {
  return myName;
}
