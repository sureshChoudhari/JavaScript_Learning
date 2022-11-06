

let show = ()=>{
    console.log("hi");
}
show(10, "test");

const arrayNumber = [10, 20, 30, 40, 20, 10];
// arrayNumber.forEach(function(currentValue,index, array){
//     console.log(currentValue,index, array);
// });

arrayNumber.forEach(currentValue => console.log(currentValue));

const arrayOfNumber = [1, 2, 3, -3, -3, -5, -7];
arrayOfNumber.forEach((currentValue, index) => {
    if(currentValue<=0){
        console.log(currentValue, index);
    }
});
console.log("----------Traversing set using forEach()------------");
const setOfNumber = new Set(arrayNumber);
setOfNumber.forEach((value) =>{
    console.log(value);
});

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );
