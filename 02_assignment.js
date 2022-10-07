

console.log("Question:1)");
function function_value(){
    console.log(100);
    console.log(200);
}
function_value()
console.log("-----------------------------------------");
console.log("Question:2)");
function functionName(firstName,lastName){
    console.log(firstName,lastName);
}
functionName("Suresh" , "Choudhari");
console.log("-----------------------------------------");
console.log("Question:3)");
function swap_values(Virat ,Anushka) {
    console.log("----------Before Swap-----------");
    console.log(Virat,Anushka);
    console.log("----------After Swap------------");
    var temp=Virat;
    Virat=Anushka;
    Anushka=temp;
    console.log(Virat , Anushka);
}
swap_values(1000, 2000);
console.log("-----------------------------------------");
console.log("Question:4)");
function add_three_number(Hello, Good, Morning){
    console.log("----------Before Addition -----------");
    console.log(Hello, Good, Morning);
    console.log("----------After Addition-----------");
    console.log(Hello + Good + Morning);
}
add_three_number(10.28, 600, 40);
console.log("-----------------------------------------");
