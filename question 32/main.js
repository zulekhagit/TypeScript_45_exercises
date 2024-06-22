var current_users = ["Usman", "Ali", "Areeba", "Zain", "Usama"];
var new_user = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// loop through new users to check for usernames availablity
new_user.forEach(function (new_one_user) {
    // making a condition for username already exists.
    if (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); })) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, "  is available"));
    }
});
