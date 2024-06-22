
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.
interface car{
    manufacturer:string,
    modelName:string,
    [key:string]:any,
}
function createCar(manufacturer:string,modelName:string,...optionalFeatures:[string,any][]):car{
    let carInfo: car={
        manufacturer:manufacturer,
        modelName:modelName,
    };
    optionalFeatures.forEach(([key,value]) => {
        carInfo[key]=value;
    });
    return carInfo

}
let Car=createCar("toyota" , "camry" , ["color" , "blue"], ["year" , "2022"] , ["feature" , "sunroof"]);
console.log(Car)

