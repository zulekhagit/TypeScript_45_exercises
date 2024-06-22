let magician:string[] = ["Harry poter" , "David Blaine" , "Criss Angel"];


function make_great(magicianArray:string[]){
    for(let i =0; i<magicianArray.length; i++){
        magician[i] = `The Great ` +  magicianArray[i]
    }
}

function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name))

}
make_great(magician);
show_magicians(magician)
