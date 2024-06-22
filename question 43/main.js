var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Harry poter", "David Blaine", "Criss Angel"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
// make_great(magician);
console.log("\n\nthis is my original array:");
show_magicians(magician);
console.log("\n\nthis is my copy of the array:");
show_magicians(copyMagicianArray);
