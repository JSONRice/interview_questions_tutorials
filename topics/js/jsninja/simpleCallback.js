/**
 * Page 37: A simple callback example
 */

function report(str) {
    console.log(str);
}

var text = "Domo arigato!";
report("Before defining functions");

function useless(ninjaCallback) {
    report("In useless function");
    return ninjaCallback();
}

function getText() {
    report("In getText function");
    return text;
}

report("Before making all the calls!");

useless(getText);

report("After the call have been made");