const accountID = 123413; // changing not allowed
let accountEmail = "ayushofficial.23@google.com";
var accountPassword = "Ayush213";

/*
Prefer not to use var keyword 
because of issue in block scope and functional scope   
use let 
*/
accountCity = "Indore";
let accountState; // the output is undefined 
// accountID = 232829;
accountEmail = "ayush@gmail.com"; 
accountPassword = "212121";
accountCity = "Delhi";
console.log("accountID = " + accountID);
console.table([accountID ,accountEmail , accountPassword , accountCity ,accountState]); 
// We can use or not use  semicolon in the end 