
//<--------------------------Memory----------------------------------->

// There are two types of memory 
// Stack , Heap

// 1. STACK MEMORY -> use for primitive dataTypes (hume ek copy milta h data jise hum kuch bi change krege to vo change ni hoga main me )

let myName = "Ayush";
let anotherName = myName;

console.log(myName);
console.log(anotherName);

anotherName = "hitesh";

console.log(myName);
console.log(anotherName);

// 2. HEAP MEMORY  -> use for reference / non-primitive dataTypes (hume ek reference milta h heap memory jise hum jo bi change krege to vo sab me change hoga)
let userOne = {
    email: "userOne@google.com",
    upi: "userOne@ybl"
}
let userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.email = "ayush@gmail.com"
userTwo.upi = "ayush@okicici"

console.log(userOne);
console.log(userTwo);
