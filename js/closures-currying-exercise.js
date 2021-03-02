/* Closures & Currying */

/* Closures */
function writeMessage(message, salutation, name) {
  return `\n"${message}"\n\n${salutation},\n-${name}\n`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

const msg1 = writeMessage(
  "You're doing amazing! Hopefully these exercises help you get a bit _closure_ to your programming goals.",
  "Keep _currying_ on",
  "Functional Pungrammer"
);

const writeFriendlyNote = signMessageFrom("Justin Blalock");
console.log(writeFriendlyNote("Hello World", "Best"));

// #1
function signMessageWith(salutation) {
  return (message, name) => writeMessage(message, salutation, name);
}

const writeBusinessMemo = signMessageWith("Regards");
console.log(writeBusinessMemo("Hi Business Hooman...woof", "Remy Dog"));

// #2
function makeSignature(salutation, name) {
  return (message) => writeMessage(message, salutation, name);
}

const writeLoveLetter = makeSignature("I <3 you...bark", "Quincy");
console.log(writeLoveLetter("gimme moar brisket!"));

/* Currying */
function quote(name, year, text) {
  return `"${text}"- ${name} (${year})`;
}

const curriedQuote = (name) => (year) => (text) => quote(name, year, text);

const quoteCrockford = curriedQuote("Doug Crockford");
const quoteDijkstra = curriedQuote("Edsger Dijkstra");
const quoteDijkstra75 = quoteDijkstra(1975);

const grumpyQuotes = [
  quote(
    "Guido van Rossum",
    2001,
    "Don't you hate code that's not properly indented?"
  ),

  quote(
    "Doug Crockford",
    2005,
    "There are no good texts on JavaScript programming."
  ),

  quote(
    "Doug Crockford",
    2008,
    "JavaScript is an astonishing language, in the very worst sense."
  ),

  quote(
    "Edsger Dijkstra",
    1978,
    "Object oriented programming is an exceptionally bad idea which could only have originated in California."
  ),

  quote(
    "Edsger Dijkstra",
    1975,
    "By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous."
  ),

  quote(
    "Edsger Dijkstra",
    1975,
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."
  ),
];

console.log(grumpyQuotes);

const stillGrumpyQuotes = [
  curriedQuote("Guido van Rossum")(2001)(
    "Don't you hate code that's not properly indented?"
  ),

  quoteCrockford(2005)("There are no good texts on JavaScript programming."),

  quoteCrockford(2008)(
    "JavaScript is an astonishing language, in the very worst sense."
  ),

  quoteDijkstra(1978)(
    "Object oriented programming is an exceptionally bad idea which could only have originated in California."
  ),

  quoteDijkstra75(
    "By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous."
  ),

  quoteDijkstra75(
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."
  ),

  quoteDijkstra75(
    "The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]"
  ),
];

console.log(stillGrumpyQuotes);
