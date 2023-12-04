//hoisting

//hello();

// function hello(){
//     console.log("hello word";)
// }

// console.log(hello);
// const hello="hello world";
// console.log(hello);

function app(){
    const myFunc=()=>{
        console.log("hello from myfunc");
    }


const addTwo=(num1,num2)=>{
    return num1+num2;
}

const mul=(num1,num2)=>num1*num2;
console.log("inside app");
myFunc();
console.log(addTwo(2,3));
}

app();