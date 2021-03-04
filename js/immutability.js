// Array Operations
// instead of myArray.push(element)
// function push(element, array) {
//   // TODO return a new array with the new element at the end
//   var newArr = array.slice();
//   newArr[array.length] = element;
//   return newArr;
// }

function push(element, array) {
  return [...array, element];
}

const prePush = [1, 2, 3];
const postPush = push(4, prePush);
console.log(prePush);
console.log(postPush);

// instead of myArray[index] = value
function update(index, value, array) {
  // TODO return a new copy of the array with the given value at index
  var newArr = array.slice();
  newArr[index] = value;
  return newArr;
}

// function update(index, value, array) {
//   return array
//     .slice(0, index - 1)
//     .concat([value])
//     .concat(array.slice(index));
// }

const preUpdate = ["spellling", "is", "hard"];
const postUpdate = update(0, "spelling", preUpdate); // her solution does not work if the index is 0
console.log(preUpdate);
console.log(postUpdate);

// instead of myArray.pop();
// function pop(array) {
//   // TODO return a new array with the last element removed
//   var newArr = array.slice(0, array.length - 1);
//   return newArr;
// }

function pop(array) {
  return array.slice(0, -1);
}

const prePop = [1, 2, 3, "popMe"];
const postPop = pop(prePop);
console.log(prePop);
console.log(postPop);
