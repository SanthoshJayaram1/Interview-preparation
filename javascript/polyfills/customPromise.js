/* Write a function in JavaScript that works similar to the original
promise. */

//Anatomy of Promise
const promise = new Promise((resolve, reject) => {
    // time-consuming async operation
    // initial state will be pending
    // any one of the below operations can occur at any given time
    // this will resolve or fulfill the promise
    resolve(value);
    // this will reject the promise
    reject(reason);
});
// this will be invoked when a promise is resolved
promise.then((value) => {
});
// this will be invoked when a promise is rejected
promise.catch((value) => {
});

// this will always be invoked after any of the above operation
promise.finally((value) => {
});

// Working of Promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("hello");
    }, 1000);
});
promise1.then((value) => {
    console.log(value);
});


/* We have to implement a custom function MyPromise that will be
similar to the original promise.
To implement this we will use the observer pattern.
Use two handlers onSuccess and onError and assign this them to the
.then, .catch, .finally methods.
Whenever the resolve or reject methods are invoked, run all the
handlers in sequence and pass down the values to the next. */


// enum of states
const states = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise{
    constructor(callback){
      this.state=states.PENDING;
      this.value=undefined;
      this.handlers=[];
      try{
           callback(this._resolve,this._reject);
      }catch(error){
          this._reject;
      }
    }
    // helper function for resolve
    _resolve = (value) => {
    this._handleUpdate(states.FULFILLED, value);
    }
    // helper function for reject
    _reject = (value) => {
    this._handleUpdate(states.REJECTED, value);
    }

    // handle the state change
    _handleUpdate = (state, value) => {
        if (state === states.PENDING) {
            return;
        }
        setTimeout(() => {
            if (value instanceof MyPromise) {
               value.then(this._resolve, this._reject);
            }
            this.state = state;
            this.value = value;
            this._executeHandlers();
        }, 0)
    }

    // execute all the handlers
    // depending on the current state
    _executeHandlers = () => {
        if (this.state === states.PENDING) {
            return;
        }
        this.handlers.forEach((handler) => {
            if (this.state === states.FULFILLED) {
                return handler.onSuccess(this.value);
            }
            return handler.onFailure(this.value);
        })
        this.handlers = [];
    }
    // add handlers
    // execute all if any new handler is added
    _addHandler = (handler) => {
        this.handlers.push(handler);
        this._executeHandlers();
    }

    // then handler
    // creates a new promise
    // assigned the handler
    then = (onSuccess, onFailure) => {
        // invoke the constructor
        // and new handler
        return new MyPromise((resolve, reject) => {
            this._addHandler({
            onSuccess: (value) => {
                if (!onSuccess) {
                    return resolve(value);
                }
                try {
                    return resolve(onSuccess(value));
                } catch (error) {
                    reject(error);
                }
            },
            onFailure: (value) => {
                if (!onFailure) {
                    return reject(value);
                }
                try {
                    return reject(onFailure(value));
                } catch (error) {
                    return reject(error);
                }
            }
            })
        })
    };

    // add catch handler
    catch = (onFailure) => {
        return this.then(null, onFailure);
    };
    // add the finally handler
    finally = (callback) => {
        // create a new constructor
        // listen the then and catch method
        // finally perform the action
        return new MyPromise((resolve, reject) => {
            let wasResolved;
            let value;
            this.then((val) => {
                        value = val;
                        wasResolved = true;
                        return callback()})
                .catch((err) => {
                        value = err;
                        wasResolved = false;
                        return callback()})
            if (wasResolved) {
               resolve(value);
            } else {
               reject(value);
            }
        })
   } 
}

const promise3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
    resolve("hello");
    }, 1000);
});
promise3.then((value) => {
    console.log(value);
});
    
