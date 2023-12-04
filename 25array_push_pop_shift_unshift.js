//array-referenced data type-> mutable 
//array push pop

//The push() method adds new items to the end of an array
//The pop() method removes (pops) the last item of an array.
//The shift() method removes the first item of an array.
//The unshift() method adds new items to the beginning of an array.

//array shift unshift

let fruits=["apple","mango","grapes"];
console.log(fruits);

//push
fruits.push("banana");
console.log(fruits);

//pop   - It will not only remove the item but will also return it
//let poppedFruit=fruits.pop();                  banana
fruits.pop();
console.log(fruits);

//unshift
fruits.unshift("banana");               // element pushed at index 0
console.log(fruits);                         

//shift                      //element removed and returned at index 0
let removedFruit=fruits.shift();
console.log(fruits);
console.log("removed fruit is ",removedFruit);

//remove and add element to and from array
var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.log(myArray);
