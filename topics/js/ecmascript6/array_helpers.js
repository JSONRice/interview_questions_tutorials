/**
 * ECMAScript 6 array helper functions include:
 *
 * forEach
 * map
 * filter
 * find
 * overy
 * some
 * reduce
 */

console.log("ECMAScript v5 array examples:");

var colors = ['red','blue','green'];

console.log("Classic ES5 for loop");
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("ES6 forEach:");
colors.forEach(function(color) {
  console.log(color);
});

console.log("Create an array of numbers.");
var numbers = [1,2,3,4,5];
console.log(numbers);

console.log("Create a variable to hold the sum.");
var sum = 0;

console.log("Loop over the array, incrementing the sum variable.");

function adder(number) {
  sum += number;
}

// Pass the function pointer to forEach
numbers.forEach(adder);

console.log("Print the sum variable.");
console.log(sum);








console.log('\nThe map helper function is nice.');
var doubleNumbers = [];

numbers.forEach(function(number) {
  doubleNumbers.push(number * 2);
});

console.log(doubleNumbers);

console.log('\nA map can help here:');
var doubled = numbers.map(function(number) {
  // a new array is generated (not mutated)
  return number * 2;
});

console.log(doubled);








var cars = [
  {model: 'Buick', price: 25000},
  {model: 'Camaro', price: 90000}
];

var prices = cars.map(function(car) {
  return car.price;
});


console.log('\nCar prices: ' + prices);
