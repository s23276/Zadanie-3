const factorialRecursive = function(num) {
  if (num === 0) {
    return 1;
  }
  
  return num * factorialRecursive(num - 1);
};

console.log(factorialRecursive(5));


function factorialIterative(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialIterative(5));