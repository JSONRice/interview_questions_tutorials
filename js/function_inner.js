/**
 * Name: Jason Rice
 * Date: Sep. 14, 2015
 *
 * Description:
 *    Illustration of inner functions. This is similar in construct to
 * inner classes in Java.
 **/

function add(a, b) {
    // First create the inner function:
    function log(msg, a, b) {
	console.log(msg + a + "+" + b + ":");
    };
    // Now call it:
    log("The result of ", a, b);
    return a + b;
};

console.log(add(1, 3)); 
