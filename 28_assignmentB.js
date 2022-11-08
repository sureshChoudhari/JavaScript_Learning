
const array_numbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];

console.log(`------------All Array number Using forEach()-----------`);
array_numbers.forEach(element => {
    console.log(element);
});

console.log(`------------Positive number Using forEach()-----------`);
array_numbers.forEach(element => {
    if(element>=1){
console.log(element);
    } 
});

console.log(`------------Negative number Using forEach()-----------`);
array_numbers.forEach(element => {
    if(element<1){
console.log(element);
    } 
});

console.log(`------------Even number Using forEach()-----------`);
array_numbers.forEach(element => {
    if(element%2==0){
console.log(element);
    } 
});

console.log(`------------Even Positined Array Using forEach()-----------`);
array_numbers.forEach((element, index) => {
    if(index%2!=0){
console.log(element);
    } 
});

console.log(`------------Odd Positined Array Using forEach()-----------`);
array_numbers.forEach((element, index) => {
    if(index%2==0){
console.log(element);
    } 
});


console.log(`------------ sum of all elements from array_numbers-----------`);
let sum = array_numbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);