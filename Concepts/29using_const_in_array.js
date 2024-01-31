// using const for creating array

const fruits=["apple","mango"];
fruits.push("banana");
console.log(fruits);

// array menthods can be used but can not be reinitialized using const keyword
fruits[0]="grapes";
console.log(fruits);

//fruits=["grapes","pineapple"];    error- assignment to const variable
