/* 
Array.prototype.filter and Its Polyfill 
Array.prototype.filter is a higher order function in javascript that iterates through 
each element of an array and can conditionally filter out elements of an array.

Example -
const numbers = [1, 2, 3, 4, 5, 6];

const isOddNumber = (element, index, array) => {
  if (element % 2) {
    return true;
  }
  return false;
};

const oddNumbers = numbers.filter(isOddNumber);
console.log("oddNumbers", oddNumbers); => [ 1, 3, 5 ]

filter function takes callback function as an argument, This Callback takes 3 parameters 
current element, current index and array, Callback function runs for each element of an array

Note - filter does not mutate the original array, Always returns new copy of a mutated array.

Use Cases -
1) Removing duplicated values in an array 

const DuplicateNumbers = [1, 1, 2, 2, 3, 4, 5, 1];

const DuplicatesRemoved = DuplicateNumbers.filter(
  (number, index, array) => array.indexOf(number) === index
);

console.log("DuplicatesRemoved", DuplicatesRemoved);
// o/p - [ 1, 2, 3, 4, 5 ]

2) Deleting a data from list of data :- 
Let's take example of deleting a todo from todolist 

const todos = [
  { id: 1, task: "Go for Movie" },
  { id: 2, task: "Go to Gym" },
  { id: 3, task: "Play Cricket" },
];

If User wants to delete task of id=2, We can simply do

const updatedTodos = todos.filter((todo, index, array) => todo.id !== 2);
console.log("updatedTodos", updatedTodos);
// o/p  [ { id: 1, task: 'Go for Movie' }, { id: 3, task: 'Play Cricket' } ]

3) Filtering Number values from an array 

const values = [1, 2, 3, undefined, "Jc", null, [], false, ""];

const filterNumbers = values.filter(Number);
console.log("filterNumbers", filterNumbers); // [ 1, 2, 3 ]

4) Filtering truthy values from an array 

const values = [1, undefined, "Jc", null, NaN, false, "", [], {}];

const filterTruthy = values.filter((value) => value);
console.log("filterTruthy", filterTruthy); //  [ 1, 'Jc', [], {} ]
Note - Boolean([]) and Boolean({}) are true values

One Level Up :- We can create our own custom filter( Polyfill of filter ), Check out code below.  
*/

const numbers = [1, 2, 3, 4, 5, 6];

const isOddNumber = (element, index, array) => {
  if (element % 2) {
    return true;
  }
  return false;
};

const oddNumbers = numbers.filter(isOddNumber);
console.log("oddNumbers", oddNumbers); // [ 1, 3, 5 ]

// Polyfill of filter
Array.prototype.customFilter = function (callback) {
  // this is pointing to numbers array here
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const oddNumbersCustom = numbers.customFilter(isOddNumber);
console.log("oddNumbersCustom", oddNumbersCustom); // [ 1, 3, 5 ]