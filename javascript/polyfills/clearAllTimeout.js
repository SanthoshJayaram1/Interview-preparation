/* 
 ClearAllTimeout and ClearAllInterval

ClearAllTimeout :-
setTimeout method returns a unique Id when it is invoked, which can be used to cancel the timer anytime using the clearTimeout method.
We can clear all the active timers by clearing all timeoutIds one by one using clearTimeout.

ClearAllInterval :-
setInterval method returns a unique Id when it is invoked, which can be used to cancel the interval anytime using the clearInterval method.
We can clear all the active intervals by clearing all intervalIds one by one using clearInterval.
*/

// 1. Let's implement ClearAllTimeout()

let globalObject;
if(typeof window==='undefined'){
    globalObject=global;
}else{
    globalObject=window;
}

const timeoutIds=[];

const originalTimeout=globalObject.setTimeout;
globalObject.setTimeout=function(cbfn,delay){
    const timeoutId=originalTimeout(cbfn,delay);
    timeoutIds.push(timeoutId);
    return timeoutId;
}

globalObject.clearAllTimeout=function(){
    while(timeoutIds.length){
        clearTimeout(timeoutIds.shift());
    }
    console.log("All above setTimeouts are cleared");
}


// 2. Let's implement ClearAllInterval()
const intervalIds = [];

const originalInterval = globalObject.setInterval;
globalObject.setInterval = function (cbFunc, delay) {
    const intervalId = originalInterval(cbFunc, delay);
    intervalIds.push(intervalId);
    return intervalId;
};

globalObject.clearAllInterval = function () {
    while (intervalIds.length) {
        clearInterval(intervalIds.shift());
    }
    console.log("All above setIntervals are cleared");
};