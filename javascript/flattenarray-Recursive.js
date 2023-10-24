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

