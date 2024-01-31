//nested destructuring

const users=[
    {userId:1,firstName:"harshit",gender:"male"},
    {userId:2,firstName:"mohit",gender:"male"},
    {userId:3,firstName:"harshit",gender:"male"}
]

// const [user1,user2,user3]=users;
// console.log(user1);

// const [{firstName}, ,{gender}]=users;
const[{firstName:user1firstName, userId}, ,{gender:user3gender}]=users;
console.log(user1firstName);   //object destructuring
console.log(user3gender);    //object destructuring
console.log(userId);
