
// <-----------"Conversion to Number"------------>
// let score = "Ayuashas";
// console.log(typeof score);
// console.log(typeof (score)); // both are true

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber);  // number


/*
"23" (string)=> 23 (number)
"23oct" (string) => NaN(number)
"Ayush" (string) => NaN(number)
null (object) => 0 (number)
undefined (undefined) => Nan (number)
true (boolean) => 1 (number)
false (boolean) => 0 (number)
*/


// <-----------"Conversion to Boolean"------------>
// let isLoggedIn = "124234535356464654";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/*
1 -> true; 0-> false
"" -> false
"Ayush" -> true
null -> false
undefined -> false
*/

// <-----------"Conversion to String"------------>
// let someNumber = undefined;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof (stringNumber));

/*
33 -> 33
null -> null
if u write any thing it convert in string it means in double or single quots
*/

// <-----------"Conversion to Object"------------>
let someValue = false;
let objectValue = Object(someValue);
console.log(objectValue);
console.log(typeof (someValue));

/* 
    33 -> [Number: 33]
    Ayush -> [String: 'Ayush']
    true / false -> [Boolean: true/false]
    null/undefined  -> {}
*/
