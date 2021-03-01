// factorial - iterative
function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

// console.log(iterativeFactorial(6));

// factorial - recursive
function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

// console.log(recursiveFactorial(6));

// fibonacci - iterative
function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

console.log(iterativeFibonacci(10));

// fibonacci - recursive
function recursiveFibonacci(n) {
  let ans = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(10));
