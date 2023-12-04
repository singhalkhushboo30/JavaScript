//typeOf operator  -> tells the type of data

//datatypes(primitive data types)
//string "harshit"
//number 0,1,2,3,4
//booleans
//null
//undefined
//Symbol
//BigInt

let age=22;
let firstName="harshit";

console.log(typeof age);
console.log(typeof firstName);

//convert number to string
console.log(typeof age+"");
console.log(typeof (age+""));
console.log(typeof age);

age=age+"";
console.log(typeof age);


//convert string to number
let myString="34";
console.log(typeof myString);

myString= +"34";
console.log(typeof myString);

let newAge=18;
newAge=String(newAge);
console.log(typeof newAge);

let newString="34"
newString=Number(newString);
console.log(typeof newString);
