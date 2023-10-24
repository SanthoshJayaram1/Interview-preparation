/*Implement a function in JavaScript that retries promises N number of
times with a delay between each call. */

// approach1 using then...catch

const retryPromiseNtimes=(operation,retries=3,delay=50,finalErr = 'Retry failed')=>{
    return new Promise((resolve,reject)=>{
        return operation()
                 .then(resolve)
                 .catch((reason)=>{
                    //if retries are left
                    if(retries>0){
                        return wait(delay)
                                 //recursively call the same function to retry with max retries - 1
                                .then(retryPromiseNtimes.bind(null,operation,retries-1,delay,finalErr))
                                .then(resolve)
                                .catch(reject);
                    }
                    return reject(finalErr);
        })
    })
}

const retryPromiseNtimes2=async(fn,retries=3,delay=50,finalErr = 'Retry failed')=>{
    try{
       await fn();
    }catch(error){
        if(retries<=0){
            return Promise.reject(finalErr);
        }
        await wait(delay);
        return retryPromiseNtimes2(fn,retries-1,delay,finalErr);
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  

const getTestFunc = () => {
    let callCounter = 0;
    return async () => {
        callCounter += 1;
        // if called less than 5 times
        // throw error
        if (callCounter < 5) {
            throw new Error('Not yet');
        }
  }
}

const test = async () => {
    await retryPromiseNtimes(getTestFunc(), 10);
    console.log('success');
    await retryPromiseNtimes(getTestFunc(), 3);
    console.log('will fail before getting here');
}
    // Print the result
test().catch(console.error);
    