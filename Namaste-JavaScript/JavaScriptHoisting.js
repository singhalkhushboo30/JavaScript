// Hoisting in JavaScript - Variables and functions



getName()        //Name    -function invocation
console.log(x)    //undefined
console.log(getName)   // f getName()
                       // { console.log("Name")}


var x

function getName(){
    console.log("Name")
}