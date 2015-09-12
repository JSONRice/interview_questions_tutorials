/**
 * Name: Jason Rice
 * Date: Sep. 12, 2015
 *
 * Description:
 * A property's name can be any string, including the empty string.
 * See Pg. 21 of JavaScript: The Good Parts
 **/

var flight = {
     // Here is an empty string
     "" : 12345,
     "airline": "Oceanic",
     "number": 815,
     "departure": {
	"IATA": "SYD",
	"time": "2004-09-22 14:55",
	"city": "Sydney"
    },
    "arrival": {
	"IATA": "LAX",
	"time": "2004-09-23 10:42",
	"city": "Los Angeles"
    }
};

// > 12345
console.log(flight['']);

// > undefined

console.log(flight.equipment);

// > Caught an error: TypeError: Cannot read property 'model' of undefined
try {
    console.log(flight.equipment.model);
}
catch(error) {
    console.log('Caught an error: ' + error);
}