/**
 * Name: Jason Rice
 * Date: Sep. 14, 2015
 *
 * Description: Illustration of bonus 'arguments' parameter.
 * This is a JS mechanism that provides for variadic function arguments (indefinite arity arguments).
 *
 * See: JavaScript The Good Parts Pg. 31
 *
 * More on variadic functions: https://en.wikipedia.org/wiki/Variadic_function
 **/


var sum = function() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; ++i) {
	sum += arguments[i];
    }
    return sum;
};

console.log(sum(4, 8, 15, 16, 23, 42)); // 108
