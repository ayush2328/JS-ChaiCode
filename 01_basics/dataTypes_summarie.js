// Kis tarike se memory me data ko rakha jata uss tarah se 2 type hote h data types ke

//1. Primitive  
// 7 types:
// String, Number, Boolean, null, undefined, Symbol, BigInt
// Symbol(it is used in adavnce JS to give unique identity)
// BigInt(used for veru very large value like scintific value)

const score = 100; // Number
const scoreValue = 100.0000; //Number

const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

//2. Reference(Non-primitive) there type is function/object function
// types: Arryas, Objects , Function 
const heros = ["shaktiman", "krish", "ayush", "shinchan", "actionKamin"];


// Objects are store in key and value pairs
const myObj = {
    name: "Ayush",
    age: 20
}
console.log(myObj);

//Function -> it can also treated as variables
const myFunction = function () {
    console.log("Hello World");
}

console.log(myFunction());
console.log(typeof (myFunction));

const newFunction = function (i, j) {
    let sum = i + j;
    console.log("sum is:", sum);
    console.log("sum is:" + sum);
    console.log("sum is: ", sum);
}
newFunction(3, 5);
//  typeof(myFuntion) -> function / object function


// which type of language is java script?
// ans: it is dynamically type language 
