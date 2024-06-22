// define a function with rest parameters that accepts a items arguments representing our sandwich
// function sandwich(...items:string[]){
// console.log(" \n making a sanwich with the following items: \n" );
// items.forEach(singleItem=> console.log(singleItem));
// console.log("\n now enjoy sandwich")
// }
// // call the function 3 times
// sandwich("chicken" , "cheese" , "mayo" , "egg");
// sandwich("bread" , "butter");
// sandwich("bread" , "butter" , "tomato " , "mayo" , "egg" , "lettuce")
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with : ".concat(items, "."));
}
make_sandwich("ketchup", "cheese");
make_sandwich("letttuce", "chicken", "mushroom");
make_sandwich("avocado", "mayo", "sprouts", "spices");
