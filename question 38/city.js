function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(nameOfCity, " is  in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
