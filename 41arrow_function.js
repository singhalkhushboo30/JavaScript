// //function expression
// let x=function(x,y){
//     return x*y;
// }

//arrow function
let x=(x,y)=>{return x*y};
console.log(x(2,3));

const sumThreeNumbers=(x)=>{
    return x%2===0;
}
console.log(sumThreeNumbers(4));

const firstChar=(anyString)=>{
    return anyString[0];
}

const findTarget=(array,target)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return 1;
        }
    }
    return -1;
}