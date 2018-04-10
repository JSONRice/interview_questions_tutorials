/**
 * Name: Jason Rice
 * Date: Sep. 14, 2015
 *
 * Description:
 *    Illustration of bonus 'arguments' parameter.
 * See: JavaScript The Good Parts Pg. 31
 **/


var sum = function() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; ++i) {
	sum += arguments[i];
    }
    return sum;
};

console.log(sum(4, 8, 15, 16, 23, 42)); // 108
