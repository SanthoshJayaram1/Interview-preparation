const debounce=(func,delay)=>{
   // 'private' variable to store the instance
   // in closure each timer will be assigned to it
   let inDebounce;
   return function(){
    // reference the context and args for the setTimeout function
    const context=this;
    const args=arguments;
    // base case
    // clear the timeout to assign the new timeout to it.
    // when event is fired repeatedly then this helps to reset
    clearTimeout(inDebounce);
    // set the new timeout and call the original function with apply
    inDebounce=setTimeout(()=>func.apply(context,args),delay);
   }
}


// print the mouse position
const onMouseMove = (e) => {
    console.clear();
    console.log(e.x, e.y);
}

// define the debounced function
const debouncedMouseMove = debounce(onMouseMove, 50);

// call the debounced function on every mouse move
window.addEventListener('mousemove', debouncedMouseMove);