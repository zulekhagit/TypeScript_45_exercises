function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it"));
}
make_shirt();
make_shirt("mediun");
make_shirt("small", "dive into coding");
