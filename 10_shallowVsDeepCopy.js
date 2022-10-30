
let myName = "Mohit";
let abc = myName;//"ohit"

let frdName = myName;
frdName = "Anil";
myName = "Sachin";
console.log(frdName, myName);

let person = {
    name: "Mohit",
    age: 32,
    city: "Pune",
}
let student = person;
student.city = "Mumbai";
console.log(student.city);