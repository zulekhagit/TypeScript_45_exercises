var magician = ["Harry poter", "David Blaine", "Criss Angel"];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
make_great(magician);
show_magicians(magician);
