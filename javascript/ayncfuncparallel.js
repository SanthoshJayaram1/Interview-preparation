/*Implement a function that takes a list of async functions as input and a
callback function and executes the input tasks in parallel i.e all at once
and invokes the callback after every task is finished. */

function asyncParallel(tasks,callback){
    let tasksCompleted=0;
    let results=[];
    tasks.forEach(asyncTask => {
        asyncTask(value => {
            results.push(value);
            tasksCompleted++;
            if (tasksCompleted >= tasks.length) {
               callback(results);
            }
        });
    });
  };

function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);
    return function(callback) {
        setTimeout(() => {
        callback(value);
        }, value * 1000);
  };
}

const taskList = [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask()];

asyncParallel(taskList, result => {
    console.log('results', result);
});
    
