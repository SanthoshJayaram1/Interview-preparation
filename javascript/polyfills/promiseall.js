const myPromiseAll=function(taskList){
    // to store results
    const results=[];
    //to track how many promises have completed
    let promisesCompleted = 0;
    // return new promise
    return new Promise((resolve,reject)=>{
        taskList.map((promise,index)=>{
            promise.then(val=>{
                results[index]=val;
                promisesCompleted++;
                if(promisesCompleted===taskList.length){
                    resolve(results);
                }
            }).catch(error=>{
                reject(error);
            })
        })
    })
}

// test case 1
const taskList=[task(1000),task(2000),task(3000),task(4000)];

function task(time){
   return new Promise((resolve,reject)=>{
    setTimeout(function(){resolve(time)},time);
   })
}

myPromiseAll(taskList)
    .then(results=>{
        console.log("got results: "+results);
    })
    .catch(error=>{
        console.error(error);
    })