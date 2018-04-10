var FACTOR = 6;

function convertTicksToDegrees(tick, isHourType) {
    if (tick <= 0) {
	return 0;
    } else if (tick >= 90) {
	return 90;
    }


    var weight = 1; // for minutes (one degree)
    if (isHourType) {
	weight = 5; // five ticks per hour
    }

    return tick * weight * FACTOR;
}

/**
 * An acute angle is between 0-90 degrees (first quadrant).
 */
function computeAcuteAngle(d1, d2) {
    if (d1 > 90 || d1 < 0) {
	throw ("Degree one is an invalid degree");
    }
    
    if (d2 > 90 || d2 < 0) {
	throw ("Degree two is an invalid degree");
    }
    
    var diff = 0;
    if (d2 > d1) {
	diff = d2 - d1;
    } else if (d1 > d2) {
	diff = d1 - d2;
    }
    return diff;
}

// 10 minutes
var minuteDegrees = convertTicksToDegrees(10, false);
// 3 hours
var hourDegrees = convertTicksToDegrees(3, true);

console.log("Minute degrees: " + minuteDegrees);
console.log("Hour degrees: " + hourDegrees);

console.log("Acute of two degrees is: " + computeAcuteAngle(minuteDegrees, hourDegrees));
