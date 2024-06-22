// define a function with rest parameters that accepts a items arguments representing our sandwich
function sandwich(...items:string[]){
console.log(" \n making a sanwich with the following items: \n" );

items.forEach(singleItem=> console.log(singleItem));
console.log("\n now enjoy sandwich")

}

// // call the function 3 times
sandwich("chicken" , "cheese" , "mayo" , "egg");
sandwich("bread" , "butter");
sandwich("bread" , "butter" , "tomato " , "mayo" , "egg" , "lettuce")

 // second mathod 
function make_sandwich(...items:string[]){
console.log(`making a sandwich with : ${items}.`);

}
make_sandwich("ketchup" , "cheese");
make_sandwich("letttuce" , "chicken" , "mushroom");
make_sandwich("avocado" , "mayo" , "sprouts" , "spices")