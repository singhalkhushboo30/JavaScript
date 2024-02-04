// when a execution context is created a this and window obejct is created whether it is functional execution context or global execution context
// where this==window

var a=10 //global execution context variable (global space)
function b(){
    var x=10 // local space
}
console.log(window.a)   //10
console.log(a)   //10 
console.log(x)    // window objetx will not find x in global space so it will give Uncaught Reference DError: x is not defined

// a, window.a, this.a all are reffering to same place in memory

// global execution context refers to window object(global objext)