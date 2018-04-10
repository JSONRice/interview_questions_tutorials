/**
 * Name: Jason Rice
 * Date: Sep. 12, 2015
 *
 * Description:
 * Objects are always pass-by-reference but the behavior is more like a copy-of-reference.
 * See Pg. 22 of JavaScript: The Good Parts
 * See http://stackoverflow.com/a/13104500
 **/

var a = { key: 'value' };

/*
  @Alnitak Specifically, when you pass an object (or array) you are (invisibly) 
   passing a reference to that object, and it is possible to modify the contents 
   of that object, but if you attempt to overwrite the reference it will not 
   affect the copy of the reference held by the caller - i.e. the reference 
   itself is passed by value:
 */
function replace(ref) {
    ref = {}; // This 
}

// > before replace: value
console.log('before replace: ' + a.key);
replace(a);
// > after replace & before update: value
console.log('after replace & before update: ' + a.key);

function update(ref) {
    ref.key = 'newvalue';
}

update(a);
// > after update: newvalue
console.log('after update: ' + a.key);

