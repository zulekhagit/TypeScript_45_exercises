"use strict";
// defined variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let numbers = [1, 2, 3, 4];
// test for equality and equality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log(" \nis apple is  not equal to apple");
console.log(apple != "apple");
//tests using lower case function
console.log("\nis APPLE is equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nis APPLE is not equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() != "apple");
// numerical test
console.log("\n Is ten is equal to twenty ?");
console.log(ten == twenty);
console.log("\n Is ten is  not equal to twenty ?");
console.log(ten != twenty);
// greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
// less than
console.log("\n Is ten is lesser than zero?");
console.log(ten < 0);
//greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than or equal to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
// tests using "and" "or" operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is greater than  50  or  twenty is equal to  20");
console.log(20 > 50 || 20 == 20);
// test whether an item is included in array
console.log("\n Is 3 is included in number array?");
console.log(numbers.includes(3));
// test whether an item is not  included in array
console.log("\n  Is 4 is not included in number array?");
console.log(!numbers.includes(4));
