
function Person(fullName, city, age, gender) {
  this.fullName = fullName;
  this.city = city;
  this.age = age;
  this.gender = gender;
}
Person.prototype.country = "India";
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let sharma = new Person("Rohit Sharma", "Pune", 32, "Male");
let riya = new Person("Riya", "Kolhapur", 22, "Female");
let sona = new Person("Sona", "Panji", 19, "Female");
 console.log(sachin.country);
 console.log(sona.country);