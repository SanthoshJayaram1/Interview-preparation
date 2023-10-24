
/* Implement a function that takes a list of async functions as input and
   executes them in a series that is one at a time. The next task is
   executed only when the previous task is completed. */

// approach 1 using Async..await
const asyncSeriesExecuter=async function(promises){
   for(promise of promises){
    try{
        const result=await promise;
        console.log(result);
    }catch(err){
        console.log(err);
    }
   }
}

const asyncTask = function(i) {
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100*i)
    });
}
const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5)];

asyncSeriesExecuter(promises);

// approach2 using recursion

const asyncSeriesExecuter2=async function(promises){
    const promise=promises.shift();
    promise.then(data=>{
        console.log(data);
        if(promises.length>0){
            asyncSeriesExecuter2(promises);
        }
    })
}

// approach3 using array.reduce()

const asyncSeriesExecuter3=function(promises){
    promises.reduce((acc, curr) => {
        return acc.then(() => {
        return curr.then(val => {console.log(val)});
        });
    }, Promise.resolve());
}
