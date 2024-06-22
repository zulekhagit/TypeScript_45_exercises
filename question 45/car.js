"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, ...optionalFeatures) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    optionalFeatures.forEach(([key, value]) => {
        carInfo[key] = value;
    });
    return carInfo;
}
let Car = createCar("toyota", "camry", ["color", "blue"], ["year", "2022"], ["feature", "sunroof"]);
console.log(Car);
