
const arrayNumber = [2, 3, 5, 4, 6, 1];

const newArray = arrayNumber.map((element, index)=> {
   if(index<=2){
return element + 5;
}
return element
});
console.log(newArray);
console.log(arrayNumber);