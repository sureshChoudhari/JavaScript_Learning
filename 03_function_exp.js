
// function test(arg1, arg2) {
//     console.log(arg1, arg2);
//     return "Sachin";
// }
// var val = test(23, 45, 60);
// console.log(val);
console.log("Question 1):==============");
console.log("Square of 5 , 6 , 25 , 100 are:");
var square = function(value){
    console.log(value * value);
}
square(5)
square(6);
square(25);
square(100);

console.log("Question 2):==============");
console.log("Type of Square are:");
console.log(typeof square);

console.log("Question 3):==============");
console.log("Area of Tringle is:");
var area_tringle = function(base, height){
    console.log(1/2*base*height);
    return "RE";
}
area_tringle(45 , 34);

console.log("Question 4):==============");
console.log("Area of Rectangle Land is:");
var area_rectangle = function(length,width){
    console.log(length*width);
}
area_rectangle(499 , 917);

console.log("Question 5):==============");
var swap_values = function(Virat ,Anushka) {
    console.log("----------Before Swap-----------");
    console.log(Virat,Anushka);
    console.log("----------After Swap------------");
    var temp=Virat;
    Virat=Anushka;
    Anushka=temp;
    console.log(Virat , Anushka);
}
swap_values(1000, 2000);

console.log("Question 6):==============");
var string ="JavaScript the most popular language"
console.log(string);
console.log("Totle charactor avilable in the string:");
console.log(string.length);
console.log("Index of charactor S in the string:");
console.log(string.indexOf("S"));
console.log(`Index of String "lang" in the string:`);
console.log(string.indexOf('lang'));
console.log(`Last charactor in the string:`);
console.log(string.charAt(35));
console.log(`3rd last charactor in the string:`);
console.log(string.charAt(33));