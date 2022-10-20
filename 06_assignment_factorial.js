
var countVowels = function (myString) {
    console.log("Count the total number vowels using includes() for string → “I am very good IT Developer”");
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount = 0;
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        var isLowerAvailable = vowelsLoweCase.includes(char);
        var isUpperAvailable = vowelUpperCase.includes(char);
        if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
        }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("I am very good IT Developer");

function sum_Of_Cubes(n){
    var cube = 0;
for (var index = 1; index <= 5; index++) {
    cube += Math.pow(index, 3);
    
}return cube;
}
console.log(`Sum Of Cube 1 to 5 is :`, sum_Of_Cubes(5));
// function sum_Of_Cubes(n) {
//     var sumn = 0;
  
//     for (var i = 1; i <= n; i++) {
//       sumn += Math.pow(i, 3);
//     }
//     return sumn;
//   }

function oddPositionedChart(arg1) {


}
oddPositionedChart(`Hard work always pays back`);
oddPositionedChart(`Soon i will be Angular IT Champ`);

function reverseString(arg1) {
    var output1 = arg1.split('').reverse().join('');
    console.log(output1);
}
reverseString(`Hard work always pays back`);

reverseString(`Soon i will be Angular IT Champ`);
