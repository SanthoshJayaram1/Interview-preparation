/* Create a javascript function that will remember its previously passed
values and return the sum of the current and previous value.*/

const curry=()=>{
    let sum=0;
    return function(num=0){
       sum+=num;
       return sum;
    }
}

let sum = curry();
console.log(sum(5)); //5
console.log(sum(3)); //8
console.log(sum(4)); //12
console.log(sum(0)); //12
console.log(sum()); //12