/* Imperative */
let name = "Justin";
let greeting = "Hello";

console.log(`${greeting}, ${name}...`);

/* Functional */
function greet(greeting, name) {
  return `${greeting}, ${name}...`;
}

console.log(greet("Hello", "Justin"));
