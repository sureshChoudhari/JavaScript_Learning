const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
// const arry3 = array1.concat(array2);
const arry3 = [...array1,...array2]
console.log(arry3);

var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99);
arrayOfNumbers.push(88);
console.log(arrayOfNumbers);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements avilable in array: ${arrayLength}`);

arrayOfNumbers[4];
console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);
let otherArray = [...arrayOfNumbers];
arrayOfNumbers[3] = 44;
console.table(arrayOfNumbers);
console.table(otherArray);