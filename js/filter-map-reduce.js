const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// #1 -> Filter()
// predicate fn() that gets passed into filter
function isEven(n) {
  if (n % 2 === 0) return true;
  else return false;
}

const evens = wholes.filter((n) => isEven(n));
console.log(evens);

const odds = wholes.filter((n) => n % 2 !== 0);
console.log(odds);

const greaterThanFour = wholes.filter((n) => n > 4);
console.log(greaterThanFour);

function isPrime(n) {
  let start = 2;
  while (start <= Math.sqrt(n)) {
    if (n % start++ < 1) {
      return false;
    }
  }
  return n > 1;
}

const primes = wholes.filter((n) => isPrime(n));
console.log(primes);

// #2 -> Map()
const doubled = wholes.map((n) => n * 2);
console.log(doubled);

const halved = wholes.map((n) => n / 2);
console.log(halved);

const fizzBuzz = wholes.map((n) => {
  if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
  if (n % 3 === 0) return "fizz";
  if (n % 5 === 0) return "buzz";
  else return n;
});
console.log(fizzBuzz);

// #3 -> Reduce()
const sum = wholes.reduce((a, x) => a + x);
console.log(sum);

const max = wholes.reduce((a, x) => {
  if (x > a) return x;
});
console.log(max);
