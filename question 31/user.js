var userNames = ["Mahad", "Ali", "Zeeshan ", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("your aaray is empty  we need to find some users!");
}
else {
    // using for each loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
