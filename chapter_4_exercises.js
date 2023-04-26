const range = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const sumRange = (start, end) => {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

const rangeBonus = (start, end, steps) => {
  const result = [];
  if (!steps) {
    steps = 1;
  }
  if (steps >= 1) {
    for (let i = start; i <= end; i += steps) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += steps) {
      result.push(i);
    }
  }
  return result;
};

const reverseArray = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }
  return result;
};

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
};

const arrayToList = (arr) => {
  let listResult = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    listResult = { value: arr[i], rest: listResult };
  }

  return listResult;
};

const listToArray = (list) => {
  let arrayResult = [];
  for (let i = list; i.value; i = i.rest) {
    arrayResult.push(i.value);
  }
  return arrayResult;
};

const prepend = (element, list) => {
  newList = { value: element, rest: list };
  return newList;
};

const whereIsNInList = (list, number) => {
  let count = 0;
  for (let i = list; i.value; i = i.rest) {
    if (number == i.value) {
      return count;
    }
    count++;
  }
  return undefined;
};

const nth = (list, number) => {
  let count = 0;
  for (let i = list; i.value; i = i.rest) {
    // do something
    if (count == number) {
      return i.value;
    }
    count++;
  }
  return undefined;
};

const deepEqual = (val1, val2) => {
  if (
    typeof val1 == "object" &&
    val1 != null &&
    typeof val2 == "object" &&
    val2 != null
  ) {
    if (Object.keys(val1).length != Object.keys(val2).length) {
      return false;
    }
    for (let key of Object.keys(val1)) {
      if (
        !Object.keys(val2).includes(key) ||
        !deepEqual(val1[key], val2[key])
      ) {
        return false;
      }
    }
    return true;
  }
  if (val1 == val2) {
    return true;
  } else {
    return false;
  }
};

// console.log(range(1, 10));
// console.log(sumRange(1, 10));
// console.log(rangeBonus(1, 10, 2));
// console.log(rangeBonus(10, 1, -1));
// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// console.log(arrayToList([1, 2, 3]));
// console.log(listToArray(arrayToList([1, 2, 3])));
// console.log(prepend(10, prepend(20, null)));
// console.log(whereIsNInList(arrayToList([10, 20, 30]), 30));
// console.log(nth(arrayToList([10, 20, 30]), 1));

// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
