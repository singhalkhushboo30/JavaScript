// difference between dot and bracket notation

const key="email";
const person={
    name:"haurshit",
    age:22,
    "person hobbies":["guitar","sleeping","listening music"]
}
console.log(person);
//console.log(person.person hobbies)                ->Error
console.log(person["person hobbies"]);

//person["key"]="harshitvashistha@gmail.com";      adds key:"harshitvashistha@gmail.com"
person[key]="harshitvashistha@gmail.com";            //adds email:"harshitvashistha@gmail.com"
console.log(person);  