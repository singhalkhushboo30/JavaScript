//callback function
function myFunc2(name){
   console.log("inside myFunc2");
   console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a function and I can ...");
    callback("harshit");
}

myFunc(myFunc2);