// Implement a “deep product” function that returns the product of all numbers within an array, including any within inner-level arrays
// Example:
// deepProduct([“x”, “y”, 2, [3, [4]]]) === 24

// function deepProduct(array, arrayElement, target, product) {
//   // BASE CASE (eventually we'll get an undefined reference)
//   if (!target) {
//     return product;
//   }
//
//   // INDUCTIVE CASE
//   if (typeof target !== 'object') {
//     if (!isNaN(target)) {
//       // first time product gets set to target
//       if (product === 0) {
//         return deepProduct(array, arrayElement + 1, array[arrayElement + 1], target);
//       }
//       // else we know the product has already been established so multiply it by the target
//       else {
//         return deepProduct(array, arrayElement + 1, array[arrayElement + 1], product * target);
//       }
//     }
//     // This extra else statement ensures the recursion only takes place once and continues on:
//     else {
//       return deepProduct(array, arrayElement + 1, array[arrayElement + 1], product);
//     }
//
//   } else if (Array.isArray(target)) {
//     target.forEach((e, i) => {
//       if (!isNaN(e)) {
//         product = product * e;
//       } else if (Array.isArray(e)) {
//         return deepProduct(array, arrayElement, e, product);
//       }
//     });
//     return deepProduct(array, arrayElement + 1, array[arrayElement + 1], product);
//   }
//   // This extra else statement ensures the recursion only takes place once and continues on:
//   else {
//     return deepProduct(array, arrayElement + 1, array[arrayElement + 1], product);
//   }
// }


// Implement a "deep product" function that returns the product of all numbers within an array, including any within inner-level arrays
// Example:
// deepProduct(["x", "y", 2, [3, [4]]]) === 24

let sum = 0;

function deepProduct(arr) {

  for(let item in arr) {
    if(typeof arr[item] === 'number') sum = sum === 0 ? arr[item] : sum * arr[item];
    if(isArray(arr[item])) deepProduct(arr[item]);
  }
  return sum;
}

function isArray(val) {
  return val.length && typeof val !== 'string'  && typeof val !== 'number';
}


console.log( deepProduct(["x", "y", 2, [3, [4]], "4", {val: 12}, [3, [4,5, [6,7,8,9]]]]) );