/**
 * Name: Jason Rice
 * Date: Sep. 11, 2015
 *
 * Description: Illustration of how JS injects semicolons
 * and also how JS does not allow a line feed between
 * the return statement and expression.
 * See Pg. 14 of JavaScript: The Good Parts
 **/

function foo() {
    var somefoo = 'foo';
    return somefoo
}

// > foo(): foo
console.log('foo(): ' + foo());

function moo() {
    var somemoo = 'moo';
    return somemoo
    ;
}

// > moo(): moo
console.log('moo(): ' + moo());

function foomoogood() {
    return foo() + moo();
}

// > foomoogood(): foomoo
console.log('foomoogood(): ' + foomoogood());

function foomoobad() {
    return 
	foo() + moo();
}

// > foomoobad(): undefined
console.log('foomoobad(): ' + foomoobad());