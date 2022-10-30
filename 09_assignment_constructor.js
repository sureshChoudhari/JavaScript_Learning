
class vehicle {
    constructor(vehicleName, vehicleColour, engineType, price) {
        this.vehicleName = vehicleName;
        this.vehicleColour = vehicleColour;
        this.engineType = engineType;
        this.price = price;
    }
    details() {
        console.log(`vehicle details are:${vehicleName} ${vehicleColour} ${engineType} ${price}`);
    }
}
console.log("=======Maruti Ertiga=========");
let maruti = new vehicle("Maruti Ertiga", "Red", "1400CC", "12 Lakh");
console.log(maruti);

console.log("=======Mercedes Benz=========");
let output = new vehicle("Mercedes Benz", "Black", "2000CC", "75 Lakh");
console.log(output);

console.log("=======Mahindra 555=========");
let output1 = new vehicle("Mahindra 555", "White", "2200CC", "10 Lakh");
console.log(output1);

console.log("=======Unicorn=========");
let output2 = new vehicle("Unicorn", "Black", "150CC", "1.5 lakh");
console.log(output2);

console.log("=======Activa 125=========");
let output3 = new vehicle("Activa 125", "Red", "125CC", "1.2 lakh");
console.log(output3);

class College {
    constructor(Name, NumberOfBranch, InTakeCapacity, City) {
        this.Name = Name;
        this.NumberOfBranch = NumberOfBranch;
        this.InTakeCapacity = InTakeCapacity;
        this.City = City;
    }
    details() {
        console.log(`College details are:${Name} ${NumberOfBranch} ${InTakeCapacity} ${City}`);
    }
}

console.log("=======College of Engineering=========");
let output0 = new vehicle("College of Engineering", 5, 350, "Pune");
console.log(output0);

console.log("=======M I.T. C.O.E.=========");
let output4 = new vehicle("M I.T C.O.E. ", 5, 450, "Aurangabad");
console.log(output4);

console.log("=======VJTI C.O.E=========");
let output5 = new vehicle("VJTI C.O.E", 5, 360, "Mumbai");
console.log(output5);

console.log("=======Walchand C.O.E.=========");
let output6 = new vehicle("Walchand C.O.E.", 5, 430, "Sangali");
console.log(output6);

// var traverse_object = function(arg){
// for (const key in College) {
//     if (Object.hasOwnProperty.call(College, key)) {
//         const element = College[key];
//         console.log(element);
//         }
// }
// }

// traverse_object(College);

// console.log("=======Traverse=========");
// for (const key in College) {
//     if (Object.hasOwnProperty.call(College, key)) {
//         const element = College[key];
//         console.log(element);
//     }
// }
console.log("=======Traverse to vehicle=========");
for (const key in vehicle) {
    if (Object.hasOwnProperty.call(vehicle, key)) {
        const element = vehicle[key];
        console.log(element);
    }
}