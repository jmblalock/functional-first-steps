function sum(numbers) {
  if (numbers.length === 1) {
    // base case
    return numbers[0];
  } else {
    // recursive case
    return numbers[0] + sum(numbers.slice(1));
  }
}

const nums = [0, 1, 2, 3, 4];
console.log(sum(nums)); // 10
