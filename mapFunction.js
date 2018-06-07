var words = ["ground", "control", "to", "major", "tom"];

function mapFunction(arr, fnct) {
  var newArr = [];
  for (var element of arr) {
    newArr.push(fnct(element));
  }
  return newArr;
}

var getLength = function(element) {
  return element.length;
}

var makeUpperCase = function(element) {
  return element.toUpperCase();
}

var reverseWord = function(element) {
  return element.split('').reverse().join('');
}

console.log(mapFunction(words, getLength));
console.log(mapFunction(words, makeUpperCase));
console.log(mapFunction(words, reverseWord));