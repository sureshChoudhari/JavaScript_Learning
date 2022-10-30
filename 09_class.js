
class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
      console.log(`Person detail are: ${this.fullName} ${this.city} ${this.age} ${this.gender}`);
    }
}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);

sachin.fullName;
sachin.details();

class Student{
    constructor(rollNumber, schoolName){
      this.rollNumber = rollNumber;
      this.schoolName = schoolName;
    }
 }
 let s1 = new Student(123, "ABC");
 let s2 = new Student(456, "PQR");

console.log(s1 instanceof Student);
console.log(sachin instanceof Student);
