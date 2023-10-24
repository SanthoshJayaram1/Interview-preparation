/* 
Array.prototype.flat and Its Polyfill 
Array.prototype.flat method flattens a given array up to the given depth. By default, It takes depth as 1.

Example -
const numbers = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]];

const result1 = numbers.flat(Infinity); // depth infinity
console.log(result1); => [ 1, 2, 3, 4, 5 , 6, 7, 8, 9 , 10 ]

const result2 = numbers.flat("1"); // depth 1 type coersion
console.log(result2); => [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], 10 ]

const result3 = numbers.flat(); // default depth 1
console.log(result3); => [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], 10 ]

const result4 = numbers.flat(2); // depth 2
console.log(result4); => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

 We can create our own custom flat( Polyfill of flat )
*/


// flatten array low simple for loop
Array.prototype.FlattenArray1=function(depth){
    if(depth==undefined){
        depth=1;
    }
    const Flatten=function(array,depth){
        let output=[];
        if(depth<1){
          return array.slice();
        }
        for(let i=0;i<array.length;i++){
            if(Array.isArray(array[i])){
                output=output.concate(Flatten(array[i],depth-1))
            }else{
                output.push(array[i]);
            }
        }
        return output;
    }
    return Flatten(this,depth);
}

// flatten array medium forEach method
Array.prototype.FlattenArray2=function(depth){
    if(depth==undefined){
        depth=1;
    }
    const Flatten=function(array,depth){
        let output=[];
        if(depth<1){
          return array.slice();
        }
        array.forEach((value) =>
            Array.isArray(value) ? (output = output.concat(flatten(value, depth - 1))): output.push(value));
        return output;
    }
    return Flatten(this,depth);
}


// flatten array hard reduce method
Array.prototype.customFlat = function (depth) {
    if (depth === undefined) {
      depth = 1;
    }
    const flatten = function (array, depth) {
      if (depth < 1) {
        return array.slice();
      }
      return array.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flatten(curr, depth - 1) : curr);
      }, []);
    };
    return flatten(this, depth);
};


// using generator functions
const arr = [1,2,[3,4,5],[6,7,8,9],10]; 
console.log("Original Array: ",arr)
function* flatten(array, depth) {
    if(depth === undefined) {
      depth = 1;
    }
    for(const val of array) {
        if(Array.isArray(val) && depth > 0) {
          yield* flatten(val, depth - 1);
        } else {
          yield val;
        }
    }
}
const flattened_arr = [...flatten(arr, Infinity)];
console.log("Flattened Array: ", flattened_arr)
