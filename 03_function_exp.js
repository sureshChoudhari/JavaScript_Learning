
// function test(arg1, arg2) {
//     console.log(arg1, arg2);
//     return "Sachin";
// }
// var val = test(23, 45, 60);
// console.log(val);
console.log("Square of 5 , 6 , 25 , 100 are:");
var square = function(value){
    console.log(value * value);
}
square(5)
square(6);
square(25);
square(100);

console.log("Type of Square are:");
console.log(typeof square);

console.log("Area of Tringle is:");
var area_tringle = function(base, height){
    console.log(1/2*base*height);
    return "RE";
}
area_tringle(45 , 34);
console.log("Area of Rectangle Land is:");
var area_rectangle = function(length,width){
    console.log(length*width);
}
area_rectangle(499 , 917);