// string
let myName = 'Max';
// myName = 28; // Not allowed

// number -> 2, 2.14, etc.
let myAge = 27;

// boolean -> true, false
let hasHobbies = false;

// assign types
let myRealAge: string;
myRealAge = '27'

// array is an object
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100]; // TS enforces types automatically for arrays unless any[] is applied

// tuples --> ordered array
// let address = ["Superstreet", 99]; // Defaults to any[]
let address: [string, number] = ["New York City", 29193];

// enum
enum Color {
  Gray, // 0
  Green, // 1
  Blue, // 2
  Red = 100, // 100
  Cyan // 101
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);
