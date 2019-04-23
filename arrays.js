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
  var myArr = arr.unshift(str);
  console.log("               FIRST TEST: " +arr + "          ");
  console.log(myArr);
  return myArr;
}

function addElementToEndOfArray(arr, str) {
  var newArr = [...arr, str];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, str) {
  arr = arr.push(str);
  return arr;
}