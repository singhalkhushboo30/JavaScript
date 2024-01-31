// undefined
//null

let firstName;
console.log(typeof firstName);
firstName="Harshit";
console.log(typeof firstName, firstName);

let myVariable=null;
console.log(myVariable);

console.log(typeof myVariable);
console.log(typeof null)    //bug, error ->It gives object but it is null

// BigInt -> Primitive data type (added in 2020)
//let myNumber=123;
//console.log(myNumber);
//console.log(Number.MAX_SAFE_INTEGER);
//console.log(Number.MIN_SAFE_INTEGER);
 
let myNumber=BigInt(123);               // initialization with BigInt data type
console.log(myNumber);
let sameMyNumber=123n;                 // initialization with BigInt data type
console.log(myNumber);
console.log(myNumber + sameMyNumber);

//let myNumber=BigInt(123);               // initialization with BigInt data type
//let sameMyNumber=123;                 // initialization with BigInt data type
//console.log(myNumber + sameMyNumber);    -> Uncaught Type Error


