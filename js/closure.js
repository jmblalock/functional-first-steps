// Closure
function makeAdjectifier(adjective) {
  return function (noun) {
    return adjective + " " + noun;
  };
}

const coolify = makeAdjectifier("cool");
console.log(coolify("workshop"));
console.log(coolify("drink"));
