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

// Takes a "snake_case_string" and returns a split array of the words, e.g. ["snake", "case", "string"]
function desnake(snake_case_string) {
  return snake_case_string.split("_");
}

// Takes a "string" and returns a string with the first letter capitalized, e.g. "String"
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}

// Takes an ["array", "of", "strings"] and returns a camelized ["array", "Of", "Strings"]
function capitalizeAll(stringArray) {
  return stringArray.map(capitalizeFirstLetter, stringArray);
}

function camelize(stringArray) {
  return [head(stringArray)].concat(capitalizeAll(tail(stringArray)));
}

function concatenate(stringArray) {
  return stringArray.reduce((acc, str) => acc + str, "", stringArray);
}

function hyphenate(stringArray) {
  return stringArray.reduce(
    (acc, str) => [acc, str].join("-"),
    head(stringArray),
    tail(stringArray)
  );
}

// Takes a "snake_case_string" and returns a "camelCaseString"
function snakeToCamel(snake_case_string) {
  const pipe = pipeline(desnake, camelize, concatenate);
  return pipe(snake_case_string);
}

console.log(snakeToCamel("super_cool_variable"));
console.log(snakeToCamel("very_long_variables_should_also_work"));
console.log(snakeToCamel("edgecase"));
