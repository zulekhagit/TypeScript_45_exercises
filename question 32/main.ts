let current_users = ["Usman" , "Ali" , "Areeba" , "Zain" , "Usama"];
let new_user = ["Hamza" , "Ayesha" , "Ali" , "Mahad" ,"Areeba"] ;

// loop through new users to check for usernames availablity
new_user.forEach(new_one_user =>{
    // making a condition for username already exists.
    if(current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())){

        console.log(`sorry ${new_one_user} is already taken!` )
    }else{
        console.log(`This Username ${new_one_user}  is available`)
    }
})