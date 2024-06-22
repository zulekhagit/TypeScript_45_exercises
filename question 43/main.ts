let magician:string[] = ["Harry poter" , "David Blaine" , "Criss Angel"];

function copyArray(arr:string[]){
    return [...arr]
}

function make_great(magicianArray:string[]){
    for(let i =0; i<magicianArray.length; i++){
        magicianArray[i] = `The Great ` +  magicianArray[i]
    }
}

function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name))

}

 const copyMagicianArray = copyArray(magician)

 make_great(copyMagicianArray)
// make_great(magician);

console.log(`\n\nthis is my original array:`)
show_magicians(magician)

console.log(`\n\nthis is my copy of the array:`)
show_magicians(copyMagicianArray)


