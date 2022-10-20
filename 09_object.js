
let person = {
    fulname: "Sachin Tndulkar",
    City: "Mumbai",
    age: 42,
    ismarried: true,
    address: {
        street:"AS CLUB",
        pin_code : 12345,
        city: "PUNE",
        state:"MH"
    }, 
    eat:function() {
console.log("I am Developer");
    }
}
person.pincode = 123456;

person.profession = "Angular Developer";

console.log(person);

console.log(person.City);

console.table(person);