//lexical scope - Lexical scope is the ability for a function scope to access variables from the parent scope.
const myVar="value";

function myApp(){
  
    function myFunc(){
        //const myVar=value69;
          const myFunct2=()=>{
            console.log("inside my Func",myVar);
          }
          myFunct2();
    }
    console.log(myVar);
          myFunc();
}
myApp();


//block scope vs function scope

//let and const are block scope-  Variable that is declared inside a specific block & can't be accessed outside of that block.
//var is function scope - Variables that are declared inside a function are called local variables and in the function scope

{
    let firstName="harshit";

}
// console.log(firstName);  - error

{
    const firstName="mohit";
    console.log(firstName);
}

{
    var firstName="harshit";
     console.log(firstName);
}
{
    console.log(firstName);
}


function myApp(){
    if(true){
        let firstName="harshit";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();