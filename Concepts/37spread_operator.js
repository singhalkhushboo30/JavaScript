//spread operator
//const array1=[1,2,3];
//const array2=[5,6,7];

//const newArray=[...array1,...array2,89,69];
//const newArray=[..."abc"];           ['a','b','c']
//const newArray=[...1234567]           //Integers -not iterable  Arrays, String-Iterable
//console.log(newArray);

//spread operator in object
const obj1={
    key1:"value1",
    key2:"value2",
};

// const obj2={
//     key3:"value3",
//     key4:"value4"
// }

const obj2={
    key1:"uniqueValue",
    key3:"value3",
    key4:"value4"
}

//const newObj={...obj1,...obj2};
//const newObj={...obj1,...obj2,key69:"value69"};
//const newObj={..."abc"};          //{0: 'a', 1: 'b', 2: 'c'}
const newObj={...["item1","item2"]}           //{0: 'item1', 1: 'item2'}
console.log(newObj);
