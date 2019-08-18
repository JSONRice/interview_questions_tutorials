Array.prototype.map = (projectionFunction) => {
  let results = [];
  this.forEach((itemInArray) => {
    results.push(projectionFunction(itemInArray));

  });

  return results;
};

JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'