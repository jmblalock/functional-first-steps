// Composing fn()s

const ender = (ending) => (input) => input + ending;

const adore = ender(" rocks");
const announce = ender(", y'all");
const exclaim = ender("!");

const hypeUp = (x) => exclaim(announce(adore(x)));
console.log(hypeUp("JS"));
console.log(hypeUp("FP"));
