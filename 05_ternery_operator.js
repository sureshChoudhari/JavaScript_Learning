var wordLengthsquare= function(word){
    var wordLength = word.length;
    return wordLength*wordLength;
}
console.log("Word Length Square of javaScript:" , wordLengthsquare(`javaScript`));

console.log("Word Length Square of Google:" , wordLengthsquare(`Google`));

console.log("Word Length Square of Developer:" , wordLengthsquare(`Developer`));

var string = "I am Angular Developer";
var num1 = string.length;
console.log("Length os String:", num1);
console.log("----------------");
var temp = string.split(" ");
var num2 = temp.length;
console.log("Total number of word:",num2);
console.log("Divide length of String to Totle number of word:", num1/num2);
 console.log("ultiplication of length of String to Totle number of word:",num1*num2);