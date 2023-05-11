let arrays = [[1, 2, 3], [4, 5], [6]];

result = arrays.reduce((prevVal, currVal) => prevVal.concat(currVal));
console.log(result);

function loop(value, testFunc, updateFunc, bodyFunc) {
  for (let i = value; testFunc(i); i = updateFunc(i)) {
    bodyFunc(i);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

function every(array, test) {
  // Your code here.
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}
console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

function everySome(array, test) {
  return !array.some((elem) => !test(elem));
}
console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log(everySome([], (n) => n < 10));
// → true
