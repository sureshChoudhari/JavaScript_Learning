let aarrayOfNumbers = [2, 3, 4, 5]
aarrayOfNumbers.push(3);
console.log(aarrayOfNumbers);
aarrayOfNumbers.length = 0;

let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log(`=====Adding element into set collection=====`);
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log(`=====Adding dublicate elements=====`);
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log(`=====Checking number of element available in set=====`);
console.log(setOfNumbers.size);

console.log(`=====Deleting elementb9=====`);
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log(`=====Checking number of element available in set 0r not=====`);
let isavailable = setOfNumbers.has(7);
console.log(isavailable);
console.log(setOfNumbers.has(9));

console.log(`=====Traversing set=====`);
for (const element of setOfNumbers) {
    console.log(element);   
}

let aarrayNumbers = [2, 3, 4, 5, 6, 3, 5];
let arrayUniqueElements = [...new Set(aarrayNumbers)];
console.log(arrayUniqueElements);