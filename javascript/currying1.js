/* Implement a currying function for 4 arguments. When we have
reached the limit, return the value. */

const sum = (...args) => {

    const storage = [...args];
    if(storage.length === 4){
        return storage.reduce((a, b) => a + b, 0);
    }
    //otherwise return a function
    else{
        const temp = function(...args2){
            //get the arguments of inner function
            storage.push(...args2);
            if(storage.length === 4){
                return storage.reduce((a, b) => a + b, 0);
            }
            //else return the same function again
            else{
                return temp;
            }
       }
        //return the function
        return temp;
    }
}

const res = sum(1, 2, 3, 4);
const res2 = sum(1)(2)(3)(4);
const res3 = sum(1, 2)(3, 4);
const res4 = sum(1, 2, 3)(4);
const res5 = sum(1)(2, 3, 4);
console.log(res, res2, res3, res4, res5);