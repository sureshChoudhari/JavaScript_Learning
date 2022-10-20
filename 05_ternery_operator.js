var wordLengthsquare = function (word) {
    var wordLength = word.length;
    return wordLength * wordLength;
}
console.log("Word Length Square of javaScript:", wordLengthsquare(`javaScript`));

console.log("Word Length Square of Google:", wordLengthsquare(`Google`));

console.log("Word Length Square of Developer:", wordLengthsquare(`Developer`));

var string = "I am Angular Developer";
var num1 = string.length;
console.log("Length os String:", num1);
console.log("----------------");
var temp = string.split(" ");
var num2 = temp.length;
console.log("Total number of word:", num2);
console.log("Divide length of String to Totle number of word:", num1 / num2);
console.log("ultiplication of length of String to Totle number of word:", num1 * num2);

var greater_number = function (num3, num4) {
    var result = num3 > num4 ? num3 : num4;
    console.log(result);
}
greater_number(10, -10);
greater_number(800, 899);

var isEvenOrOdd = function (num5) {
    var result = num5 % 2 == 0 ? true : false;
    return result;
}
console.log(isEvenOrOdd(29));
console.log(isEvenOrOdd(44));
console.log(`-----------`);
console.log(isEvenOrOdd(0));
console.log(isEvenOrOdd(101));

var wordLengthEvenOrodd = function (typeword) {
    var wordLength = typeword.length;
    var evenOrOdd = wordLength % 2 == 0 ? "Even Number" : "Odd Number";
    return evenOrOdd;
}

console.log(`Word Length of "javaScript" is:`, wordLengthEvenOrodd("javaScript"));

console.log(`Word Length of "Google" is:`, wordLengthEvenOrodd(`Google`));

console.log(`Word Length of "Developer" is:`, wordLengthEvenOrodd(`Developer`));
