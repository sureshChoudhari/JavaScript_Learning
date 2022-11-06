`use strict`

let person = {
    fullName: "Mohit Aglawe",
    age: 31,
    city: "Pune",
    pin: 431201,
    state: "MH",
    isMarried: true
}

// let fullName = person.fullName;
// let city = person.city;
// let pin = person.pin;
// let state = person.state;
// let isMarried = person.isMarried;
    
    let { fullName, age, city, pin, state, isMarried} = person;
    console.log(fullName, age, city, pin, state, isMarried);

    let arrayNumbers = ["Monu", "Golu", "Chottu", "Ponu", "Dholu"];
     
    // let ele0 = arrayNumbers(0);
    // let ele1 = arrayNumbers(1);
    // let ele2 = arrayNumbers(2);
    // let ele3 = arrayNumbers(3);
    // let ele4 = arrayNumbers(4);

     let [ele0, ele1,ele2, ele3, ele4] = arrayNumbers;
    console.log(ele0, ele1,ele2, ele3, ele4);