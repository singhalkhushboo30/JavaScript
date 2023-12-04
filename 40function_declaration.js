function singHappyBirthday(){
    console.log("Happy Birthday to you.......");
}

function sumTwoNumbers(number1,number2){
    return number1+number2;
}

singHappyBirthday();
console.log(sumTwoNumbers(1,4));
const returnedValue=sumTwoNumbers(4,5);
console.log(returnedValue);

//isEven
//input:1 number
//output:true,false

// function isEven(number){
//     return number%2===0;
// }
// console.log(isEven(4));

function firstCharacter(anyString){
    return anyString[0];
}

//console.log(firstChar("abc"));

//function
//input: array,target(number)
//output: index of target if target present in array
function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
        
        }
        return -1;
    }


    console.log(findTarget([1,5,4,4,6],0));


//function expression
// const singHappyBirthday=function(){
//     console.log("Happy Birthday to you....");
// }
// console.log(singHappyBirthday());

const sumThreeNumbers=function(number1,number2,number3){
    return number1+number2+number3;
}
console.log(sumThreeNumbers(1,1,1));