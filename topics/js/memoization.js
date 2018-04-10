/*********************************************************
 * Secrets of the JavaScript Ninja 2nd Ed. Pg. 42
 * Listing 3.3
 *
 * Memoizing previously computed primes
 ********************************************************/
function isPrime(value) {
    if(!isPrime.answers) {
	isPrime.answers = {}; // Creates a cache for memoization
    }

    if(isPrime.answers[value] !== undefined) {
	return isPrime.answers[value];
    }

    var prime = value !== 1; // 1 is not prime
    for (var i = 2; i < value; i++) {
	if (value % i === 0) {
	    prime = false; // number is composite (not prime)
	    break;
	}
    }
    return isPrime.answers[value] = prime; // Store computed value (true or false) in cache and return
}

if (isPrime(5)) {
    console.log("5 is prime!");
}

console.log("Here's the cached value for 5: " + isPrime.answers[5]);
console.log("Here's the cached value for 7: " + isPrime.answers[7]);
