//solution 1
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

//solution 2
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

//solution 3
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}

//solution 4
function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}
