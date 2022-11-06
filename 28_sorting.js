


const arrayNumbers =[2, 3, 5, 4, 6, 1];
 const arrayOfNames = ["Anil", "Shantanu", "Nutan", "Suyog", "DD", "Pradnya"];
 arrayOfNames.sort();
 console.log(arrayOfNames);

 const arrayOfNumber = [22, 36, 50, 100, 600, 77, 455];
 arrayOfNumber.sort( (first, second) => {
    return (first > second ? 1:-1)
 });
 console.log(arrayOfNumber);
 console.log(arrayOfNumber.length-2);