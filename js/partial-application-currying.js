// Currying
function greet(greeting, name) {
  return `${greeting}, ${name}...`;
}

function curryGreet(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const greetiItal = curryGreet("Ciao");
console.log(greetiItal("Remy"));

const greetTex = curryGreet("Howdy");
console.log(greetTex("Remy"));
console.log(greetTex("Quincy"));
