 let map = new Map();
 map.set(22, "Sachin");
 map.set(11, "Dravid");
 map.set(33, "Gangully");
 map.set(77, "Sehwagh");
console.log(map);

console.log(`-----Adding Dublicate Key-------`);
map.set(11, "Gautam");
console.log(map);

console.log(`-----Retrieving Value-------`);
let value = map.get(33);
console.log(value);
console.log(map.get(99));// key is not availabe output Undefined

console.log(`-----Deleting Record-------`);
map.delete(11);
console.log(map);

console.log(`-----Is key Available-------`);
map.has(77);

console.log(`-----Transverse over Map Collection-------`);
let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}

class Person {
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");

let mapOfPersons = new Map();
mapOfPersons.set(22, personAnil);
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys();
for (const key of mapKeys) {
    let personObject = mapOfPersons.get(key);
    personObject.details();
}