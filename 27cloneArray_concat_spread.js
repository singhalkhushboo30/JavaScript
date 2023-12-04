//how to clone array

//how to concatenate two arrays

let array1=["item1","item2"];

//Cloning an array
// let array2=["item1","item2"];   (Not the right way to clone an array)
//let array2=array1.slice(0);             used to clone an array
// let array2=[].concat(array1);
//new way to clone an array - spread operator
//let array2=[...array1];

//Creating an array that is the clone of other array and has some more elements

//let array2=array1.slice(0).concat(["item3","item4"]);
//let array2=[].concat(array1,["item3","item4"]);
//let array2=[...array1,"item3","item4"];

let oneMoreArray=["item3","item4"];
let array2=[...array1,...oneMoreArray];
array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);





