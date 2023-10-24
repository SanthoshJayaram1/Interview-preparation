/* 
Array.prototype.forEach and Its Polyfill 
Array.prototype.forEach is a higher order function that iterates through each element of an array and executes a callback 
function once for each element.

Example -
const todos = [
  { id: 1, todo: "Morning Walk" },
  { id: 2, todo: "Go to Office" },
  { id: 3, todo: "Watch Netflix" },
  { id: 4, todo: "Go to Gym" },
  { id: 5, todo: "Go for Movie" },
];

const display = ({ todo }, index, array) => {
  console.log(todo);
};

todos.forEach(display);

// output 
Morning Walk
Go to Office
Watch Netflix
Go to Gym
Go for Movie 

forEach function takes callback function as an argument, This Callback takes 3 parameters 
current element, current index and array, Callback function runs for each element of an array

Note - forEach does not mutate the original array, and always returns undefined.

forEach Vs Map -

1) map method returns a new array where as forEach method returns undefined.

2) When to use map? :- If you want to transform an array 
   and need a returned array, You should use map. ( Editing a todo list )

3) When to use forEach? :- If you want to just loop through 
   all the elements of an array and don’t need a returned array, You should use forEach. ( Displaying a todo list )

Use Case -
 Displaying a list of data on Ui 
 
 One Level Up :- We can create our own custom forEach( Polyfill of forEach ), Check out code below. 
*/

const todos = [
    { id: 1, todo: "Morning Walk" },
    { id: 2, todo: "Go to Office" },
    { id: 3, todo: "Watch Netflix" },
    { id: 4, todo: "Go to Gym" },
    { id: 5, todo: "Go for Movie" },
  ];
  
  const display = ({ todo }, index, array) => {
    console.log(todo);
  };
  
  todos.forEach(display);
  
  //  Polyfill of forEach
  Array.prototype.customForEach = function (callback) {
    //  this is pointing to todos array here
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  todos.customForEach(display);
  
  /* output 
  Morning Walk
  Go to Office
  Watch Netflix
  Go to Gym
  Go for Movie */