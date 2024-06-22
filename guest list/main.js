// exercise 14
var guest_list = ["ali", "farhan", "raza", "ayesha"];
// for(let i=0;  i < guest_list.length; i++){
//     console.log(`Mr . ${guest_list[i]} ! you are invited to my dinner on monday `);
// }
// exercise 15
var not_present = "farhan";
var new_guest = "babar azam";
guest_list[1] = new_guest;
// for(let i=0;  i <guest_list .length; i++){
//         console.log(`Mr . ${guest_list[i]} ! you are invited to my dinner on monday `);
//     }
console.log("Mr . ".concat(not_present, " will not coming on monday dinner ."));
//exercise 16
guest_list.unshift(" shaheen", "sarfaraz", "rizwan");
// for(let i=0;  i <guest_list .length; i++){
//     console.log(`Mr . ${guest_list[i]} ! you are invited to my dinner on monday we found a big table so we decided to invite 3 more guest `);
// }
//exercise 17
console.log("\nunfortunately not arrange the table , only two people allow . ");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry sir/madam ,".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr . ".concat(guest_list[i], " ! yes you are still invited for dinner on monday "));
}
guest_list.splice(0, 2);
console.log(guest_list);
