/*  implement a calculator
that performs the basic actions like add, subtract, divide, and multiply. */

// 1. using objects

const calculator={
    total:0,
    add: function(val){
        this.total+=val;
        return this;
    },
    subtract:function(val){
        this.total-=val;
        return this;
    },
    divide:function(val){
        this.total/=val;
        return this;
    },
    multiply:function(val){
        this.total*=val;
        return this;
    },
}

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);


// 2. using functions

const CALC=function(){
    this.total=0;
    this.add=(val)=>{
        this.total+=val;
        return this;
    }
    this.subtract=(val)=>{
        this.total-=val;
        return this;
    }
    this.multiply=(val)=>{
        this.total*=val;
        return this;
    }
    this.divide=(val)=>{
        this.total/=val;
        return this;
    }
}


// 3. using classes


class CALC2 {
    constructor() {
        this.total = 0;
        this.add = (val) => {
            this.total += val;
            return this;
        };
        this.subtract = (val) => {
            this.total -= val;
            return this;
        };
        this.multiply = (val) => {
            this.total *= val;
            return this;
        };
        this.divide = (val) => {
            this.total /= val;
            return this;
        };
    }
}

const calculator1 = new CALC();
calculator1.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator1.total);


