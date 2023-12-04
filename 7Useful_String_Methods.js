//trim()
//toUpperCase()
//toLowerCase()
//slice

let firstName="   harshit   ";
console.log(firstName.length);
firstName=firstName.trim();   //"harshit"
console.log(firstName);
console.log(firstName.length);

//console.log(firstName.toUpperCase());
firstName=firstName.toUpperCase();
console.log(firstName);

console.log(firstName.toLowerCase());

console.log(firstName);

//start index
//end index
let newString=firstName.slice(0,5); //harsh
console.log(newString);