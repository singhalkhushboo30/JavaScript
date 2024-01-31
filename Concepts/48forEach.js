//important array methods

// const numbers=[4,3,5,8];

// function multiplyBy2(number,index){
//     console.log(`index is ${index} number is ${number}`);}


//     numbers.forEach(function(numkber,index){
//         console.log(`index is &{index} number is ${number}`)})

//         numbers.forEach(function(number,index){
//             console.log(number*3);
//         })

const users=[
    {firstName:"harshit",age:24},
    {firstName:"mohit",age:22},
    {firstName:"nitish",age:25},
    {firstName:"ankit",age:22},

]
// users.forEach(function(user){
//     console.log(user.firstName);
// })

// for(let user of users){
//     console.log(user.firstName);
// }

users.forEach(user=>{
    console.log(user.firstName);
})