const throttle=(func,limit)=>{
    let flag=true;

    return function(){
        if(flag){
            func();
            flag=false;
            setTimeout(()=>{flag=true},limit);
        }
    }
}

const throttle2 = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        }, limit - (Date.now() - lastRan));
      }
    }
  }

const print = () => {
    console.log("hello");
}
const throttled = throttle(print, 2500);
window.addEventListener('mousemove', throttled, false);


/* What is the difference between debouncing and throttling?
● Debouncing:- It is used to invoke/call/execute functions only
when things have stopped happening for a given specific time.
For example, Call a search function to fetch the result when the
user has stopped typing in the search box. If the user keeps on
typing then reset the function.
● Throttling:- It is used to restrict the no of time a function can be
called/invoked/executes. For example, making an API call to the
server on the user’s click. If the user spam’s the click then also
there will be specific calls only. Like, make each call after 10
seconds. */