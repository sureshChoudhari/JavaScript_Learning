 console.log(`----Original  element---- `);
let arrayOfName = [`Kamat`, `Menon`, `Nashpati`, `Taimur`, `Menon`, `Kamat`, `Andy`, `Taimur`];
let arrayUniqueElements = [...new Set(arrayOfName)];
console.log(arrayOfName);

console.log(`----After Removing Dublicate element---- `);
console.log(arrayUniqueElements);

console.log(`----Number of Dublicate element---- `);
console.log(arrayOfName.length - arrayUniqueElements.length);

console.log(`----Number of Unique element---- `);
console.log(arrayUniqueElements.length);