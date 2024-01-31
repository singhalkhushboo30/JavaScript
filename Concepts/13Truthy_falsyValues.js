// truthy and falsy values

//falsy values
// false
// ""
// null
// undefined
// 0

let firstName="";      // firtsName= 0," ",false,null,undefined -> else statement gets executed
if(firstName){
    console.log(firstName);
}
else{
    console.log("firstName kinda empty");
}

//truthy values
// "abc"
// 1,-1

let name="harshit";      
if(name){
    console.log(name);
}
else{
    console.log("firstName kinda empty");
}
