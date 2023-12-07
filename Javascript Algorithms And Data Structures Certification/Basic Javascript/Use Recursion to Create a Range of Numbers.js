//solution 1
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

//solution 2
function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

//solution 3
function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}
