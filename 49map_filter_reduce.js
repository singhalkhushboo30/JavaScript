//map method- The map method is used to create a new array with the result of a callback function called on each element in the original array.

// const numbers=[3,4,5,6,7,8];

// const square=function(number){
//     return number*number;
// }

// const squareNumber=numbers.map(square);
// console.log(squareNumber);

const users=[
    {firstName:"harshit",age:24},
    {firstName:"mohit",age:22},
    {firstName:"nitish",age:25},
    {firstName:"ankit",age:22},

]
const userNames=users.map((user)=>{
    return user.firstName;
})
console.log(userNames);

//filter method-The filter method is used to filter an array based on a certain condition. The filter method takes a callback function as its argument, which is called on each element in the array.

const numbers=[1,2,3,4,5,6];

const evenNumbers=numbers.filter((number)=>{
    return number%2===0;
});

console.log(evenNumbers);

//reduce method- The reduce method is used to reduce an array to a single value. The reduce method takes a callback function as its argument, which is called on each element in the array. 

const num=[1,2,3,4,5];

const result=num.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;

});
console.log(result);
