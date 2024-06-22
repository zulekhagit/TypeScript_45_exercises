// creating a array
var myPizza = ["Cheese Pizza", "Chicken Tikka Pizza", "Vegetarian Pizza"];
// for loop printing just names
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
// printing sentence 
for (var i = 0; i < myPizza.length; i++) {
    console.log(" I Like to eat ".concat(myPizza[i]));
}
