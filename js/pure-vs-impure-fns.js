/* Not Pure */
// can't really count on this to return the same thing ->
let name = 'Justin';

function greet() {
  console.log(`hello ${name}...`);
}

greet();

name = 'Emily';
greet();

/* Pure */
// deterministic - you can count on what's returned ->
function greet2(name) {
  return `Hello ${name}...`;
}

console.log(greet2("Remy"));
