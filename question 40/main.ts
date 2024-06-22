function make_album(artist_name:string,album_title:string){
return {artist_name, album_title}
}
let album1 = make_album("Ali", "Rang-e-Mohabbat");
let album2 = make_album("Madad" , "Roshan Andhera");
let album3 = make_album("Ayaz" , "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

// number of tracks
function make_album2(artist_name:string,album_title:string,tracks?:number){
    return {artist_name, album_title, tracks}
    }
    let album4 = make_album2("Ali", "Rang-e-Mohabbat",30);
    let album5 = make_album2("Madad" , "Roshan Andhera",55);
    let album6 = make_album2("Ayaz" , "Mausam-e-Dil");
    
    console.log(album4);
    console.log(album5);
    console.log(album6);
