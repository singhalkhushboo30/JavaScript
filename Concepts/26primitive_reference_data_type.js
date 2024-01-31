// primitive vs reference data types
 

let num1=6;
let num2=num1;
console.log("value of num1 is ",num1);
console.log("value of num2 is ",num2);
num1++;
console.log("after incrementing num1");
console.log("value of num1 is ",num1);
console.log("value of num2 is ",num2);

//reference types
//array
let array1=["item1","item2"];
let array2=array1;
console.log("array1 is ",array1);
console.log("array2 is ",array2);
array1.push("item3");
console.log("after pushing elemnt to array1 ");
console.log("array1 is ",array1);
console.log("array2 is ",array2);

