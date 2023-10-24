/* implement this  computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value(); */

class ComputeAmount{
    constructor(){
        this.store=0;
        this.lacs=function(val){
            this.store+=val*Math.pow(10,5);
            return this;
        }
        this.crore=function(val){
            this.store+=val*Math.pow(10,7);
            return this;
        }
        this.thousand=function(val){
            this.store+=val*Math.pow(10,3);
            return this;
        }
        this.hundred=function(val){
            this.store+=val*Math.pow(10,2);
            return this;
        }
        this.ten=function(val){
            this.store+=val*Math.pow(10,1);
            return this;
        }
        this.unit=function(val){
            this.store+=val;
            return this;
        }
        this.value=function(){
            return this.store;
        }
    }
}

const computeAmount = new ComputeAmount();
const amount =computeAmount.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
console.log(amount === 143545000);


// 2. using function as closure

/*We will form closure and return a new object from it that will have all
the logic encapsulated. This way we won't have to create a constructor
everytime and the data won’t duplicate too. */

const ComputeAmount = function(){
    return {
        store: 0,
        crore: function(val){
            this.store += val * Math.pow(10, 7);
            return this;
        },
        lacs: function(val){
            this.store += val * Math.pow(10, 5);
            return this;
        },
        thousand: function(val){
            this.store += val * Math.pow(10, 3);
            return this;
        },
        hundred: function(val){
            this.store += val * Math.pow(10, 2);
            return this;
        },
        ten: function(val){
            this.store += val * 10;
            return this;
        },
        unit: function(val){
            this.store += val;
            return this;
        },
        value: function(){
        return this.store;
        }
    }
}

const amount2 =ComputeAmount().lacs(9).lacs(1).thousand(10).ten(1).unit(1).value();
console.log(amount2 === 1010011);

const amount3 =ComputeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
console.log(amount3=== 143545000);


