var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
  if (!(array instanceof Array) || !(typeof property === 'string')) {
    return [];
  }


  console.log('Plucking out fields that map to: ' + property);

  return array.map(function(element) {
    return element[property];
  });
}

console.log(pluck(paints, 'color'));
