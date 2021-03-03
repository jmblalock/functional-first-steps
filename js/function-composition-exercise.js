// Function Composition Exercise
function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

function pipeline(...functions) {
  if (length(functions) === 0) return (input) => input;
  if (length(functions) === 1) return (input) => head(functions)(input);
  return function (input) {
    return pipeline(...tail(functions))(head(functions)(input));
  };
}

const pluralize = (singularWord) => singularWord + "s";
const heart = (word) => "I ❤️ " + word;
const exclaim = (sentence) => sentence + "!";
const showSomeLove = pipeline(pluralize, heart, exclaim);

// #1
const pipelineLove = showSomeLove("pipeline");
console.log(pipelineLove);

// #2
const functionLove = showSomeLove("pure function");
console.log(functionLove);

// #3
const coffeeLove = showSomeLove("coffee break");
console.log(coffeeLove);

// #4
const loveSomeShow = pipeline(exclaim, heart, pluralize);
const wrongOrder = loveSomeShow("pipeline");
console.log(wrongOrder);

// #5
const composedPipe = pipeline(pluralize, pipeline(heart, exclaim));
const compositionLove = composedPipe("composition");
console.log(compositionLove);

// #6
const composedPipe2 = pipeline(pipeline(pluralize, heart, exclaim));
const compositonLove2 = composedPipe2("composition");
console.log(compositonLove2);

// #7
function reducePipeline(...functions) {
  return (input) =>
    [...functions].reduce((acc, fn) => fn(acc), input, functions);
}

const showSomeLove2 = reducePipeline(pluralize, heart, exclaim);
const pipelineLove2 = showSomeLove("pipeline");
console.log(pipelineLove2);
