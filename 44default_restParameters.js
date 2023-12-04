//default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b=0;
//     }
//     return a+b;
// }

// const ans=addTwo(4,3);
// console.log(ans);

function addTwoNumbers(a,b=0){
    return a+b;
}

const ans=addTwoNumbers(5,3);
console.log(ans);


//rest Parameters

function myFunc(a,b,c,d){
    console.log(`a is {a}`);
    console.log(`b is {b}`);
    console.log(`c is {c}`);
    console.log(`d is {d}`);
}

myFunc(3,4,5,6,8,98,6,6);

function myFunc2(a,b,c,...d){
    console.log(`a is {a}`);
    console.log(`b is {b}`);
    console.log(`c is {c}`);
    console.log(`d is`,d);
}

myFunc2(3,4,5,6,8,98,6,6);



//Rest Parameters in Array

function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}

const answer=addAll(1,2,3,4,5);
console.log(answer);
