/* 
 Implementation of map method using reduce. 
*/

//1. build from scratch
Array.prototype.customMap = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = this;
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (i in array) {
        result[i] = callback.call(thisArg, array[i], i, array);  //or  result[i] = callback(array[i], i, array);
      }
    }

    return result;
};

//Example usage of customMap:
const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers1.customMap(function (value) {
  return value * 2;
});

console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

//2. map polyfill using reduce
Array.prototype.customMap = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = this;
    const result = [];

    // Use the reduce method to accumulate values in the 'result' array.
    this.reduce(function (accumulator, currentValue, index, array) {
      result.push(callback.call(thisArg, currentValue, index, array));
      return accumulator; // The 'accumulator' is not used in this case.
    }, null);

    return result;
};
