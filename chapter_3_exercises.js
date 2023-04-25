const smallestArg = (num1, num2) => {
  if (num1 > num2) {
    return num2;
  }
  return num1;
};

const isEven = (num) => {
  if (num < 0) {
    num *= -1;
  }
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
};

const countChar = (word, char) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == char) {
      count += 1;
    }
  }
  return count;
};

console.log(smallestArg(5, 10));
console.log(smallestArg(50, 5));
console.log(isEven(-8));
console.log(countChar("kakkerlak", "k"));
