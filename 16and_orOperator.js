// and or operator

let firstName="Harshit";
let age=22;

if(firstName[0]==='h'){
    console.log("your name starts with h");
}

if(age>18){
    console.log("your are above 18");
}

if((firstName[0]==='h') && (age>18)){
    console.log("name starts with h and the age is above 18");
}
else{
    console.log("inside else");
}

if((firstName[0]==='h') || (age>18)){
    console.log("name starts with h and the age is above 18");
}
else{
    console.log("inside else");
}