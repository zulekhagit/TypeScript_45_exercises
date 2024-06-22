function make_album(artist_name, album_title) {
    return { artist_name: artist_name, album_title: album_title };
}
var album1 = make_album("Ali", "Rang-e-Mohabbat");
var album2 = make_album("Madad", "Roshan Andhera");
var album3 = make_album("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
// number of tracks
function make_album2(artist_name, album_title, tracks) {
    return { artist_name: artist_name, album_title: album_title, tracks: tracks };
}
var album4 = make_album2("Ali", "Rang-e-Mohabbat", 30);
var album5 = make_album2("Madad", "Roshan Andhera", 55);
var album6 = make_album2("Ayaz", "Mausam-e-Dil");
console.log(album4);
console.log(album5);
console.log(album6);
