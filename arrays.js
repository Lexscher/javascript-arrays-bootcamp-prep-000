var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles'];

function addElementToBeginningOfArray(arr, str) {
  var newArr = [str, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, str) {
  return arr.unshift(str);
}

function addElementToEndOfArray(arr, str) {
  var newArr = [...arr, str];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, str) {
  return arr.push(str);
}