STconst name = "Ayush";
const age = 20;

// console.log(name + " " + age + " Anything"); //(not use in industry level)
// console.log(name, age, " Anything"); //(not use in industry level)

console.log(`Hello, My self ${name.toUpperCase()} and I'm ${age} years old.`); // String Interpolation

const gameName = new String("Ayush");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));
console.log(gameName.valueOf());
// console.log(gameName.);

// -----------valueOf()-------------
let number = 123;
console.log(number.valueOf()); // 123 (asli/raw value hi wapas mili)

let obj = {
    name: "John"
};
console.log(obj.valueOf()); // { name: "John" } (object ka reference mila)