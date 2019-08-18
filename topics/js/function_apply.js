/**
 * Name: Jason Rice
 * Date: Sep. 14, 2015
 *
 * Description:
 *    Illustration of bonus 'arguments' parameter. Because of a design
 * error, 'arguments' is not really an array. It is an array-like object.
 * 'arguments' has a length property, but it lacks all of the array methods.
 * See: JavaScript The Good Parts Pg. 31
 **/


let sum = function () {
  let i, sum = 0;
  for (i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  return sum;
};

console.log(sum(4, 8, 15, 16, 23, 42)); // 108
