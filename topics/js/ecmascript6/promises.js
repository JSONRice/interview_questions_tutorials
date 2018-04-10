/*******************************************************************
 * Ref: https://scotch.io/tutorials/javascript-promises-for-dummies
 *******************************************************************/

/* ES5 */
var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
	if (isMomHappy) {
	    var phone = {
		brand: 'Samsung',
		color: 'black'
	    };
	    resolve(phone); // fulfilled
	} else {
	    var reason = new Error('mom is not happy');
	    reject(reason); // reject
	}

    }
);

// 2nd promise
var showOff = function (phone) {
    return new Promise(
	function (resolve, reject) {
	    var message = 'Hey friend, I have a new ' +
		phone.color + ' ' + phone.brand + ' phone';

	    resolve(message);
	}
    );
};

// call our promise
var askMom = function () {
    willIGetNewPhone
	.then(showOff) // chain it here    
        .then(function (fulfilled) {
	    // yay, you got a new phone
	    console.log(fulfilled);
	})
        .catch(function (error) {
	    // ops, mom don't buy it
	    console.log(error.message);
	});
}

askMom();
