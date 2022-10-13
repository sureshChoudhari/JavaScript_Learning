
console.log(`---------Question 1)------`);
function isEvenOrOdd(number) {
    var result = number % 2 == 0 ? `${number} is Even` : `${number} is Odd`;
    console.log(result);
    return result;
}
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);


console.log(`---------Question 2)------`);
var voteEligibility = function(age){
if(age>= 18){
    console.log(`person of age ${age} is Eligible for Vote`);
}else{
    console.log(`Person of age ${age} is Not Eligible for Vote`);
}
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log(`---------Question 3)------`);
var string = "JavaScript-ES6";//14
var result = string.length;
if(result>10){
    console.log(`String "${string}" contain more than 10 charactor`);
}

console.log(`---------Question 4)------`);
var string = `JavaScript Language`;
console.log(`String start with Java is `, string.startsWith(`Java`));