//objects - reference type  {Keys are by deafult in string format}
//arrays are good but not sufficient to represent real world data
//objects store key value pairs
//objects don't have index

//how to create objects

//const person={name:"Hrashit",age:22};
//console.log(person);
//console.log(typeof person);
const person={
    name:"Harshit",
    age:22,
    hobbies:["guitar","sleeping","listening music"]
}
console.log(person);

//how to access data from objects
//console.log(person.name);
//console.log(person.age);
console.log(person.hobbies);    //Dot Notation to access data 
console.log(person["hobbies"]);  // Byracket Notation to access data

//how to add key value pair to objects
person.gender="male";
console.log(person);
person["address"]="Delhi";
console.log(person);
