// 1

const matrix = [];
for (let i = 0; i < 4; i++) {
  let counter = i * 3;
  matrix[i] = [counter++, counter++, counter++];
}

// 1,2,3
// 4,5,6
// 7,8,9
const x = matrix[1][2];

console.log(x);


// 2

function sortArray(array) {
  const max = array.length;

  for (let i = 0; i < max; i++) {
    let j = i;
    while(array[j - 1] > array[j]) {
      let tmp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = tmp;
      j--;
    }
  }

  return array;
}

console.log(sortArray([1,4,7,2,3,9,12,5]));

// 3. What does the following code print?

console.log('one');
setTimeout(() => {
  console.log('two');
}, 0);
console.log('three');

// 4. wrap the given function call with logged timing information
function wrapWithTiming(fn) {
  return function() {
    const startAt = +new Date();
    fn(arguments); // call or apply or bind or just 'fn'
    console.log(+new Date() - startAt);
  }
}

const array = [1,2,3,4,5];
wrapWithTiming((array) => {console.log(array)});

// 15. What is the value of x?
var a = {x: 10, y: 11, z: 12};
var b = {x: 1, y: 2, z: 3};
var c = {a: 1, b: 2, c: 3};
var d = {};

d.__proto__ = c;
c.__proto__ = b;
b.__proto__ = a;

var rv = d.x;
console.log('d.x', rv);
