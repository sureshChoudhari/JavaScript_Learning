
var gradeSystem = function(score){
    if(score>=1 && score<35){
        console.log(`You are Failed`);
    }else if(35<= score && score<60){
       console.log(`passed with GRADE is'C'`);
    } else if(60<= score && score <75){
        console.log(`passed with GRADE is'B'`);
    }else if(75<= score && score <90){
    console.log(`passed with GRADE is'A'`);
    }else if(90<= score && score<=100){
         console.log(`passed with GRADE is'A+'`);
    }else if(-1> score || score <101 || score!=NaN || score==null || score==undefined || score== " "){
        console.log(`Invalid Input`);
    }
}
console.log("==========marks with 66========");
gradeSystem(66);
console.log("==========marks with 13========");
gradeSystem(13);
console.log(`==========marks with " " ========`);
gradeSystem("");
console.log("==========marks with 98========");
gradeSystem(98);
console.log(`==========marks with "fifty Five"========`);
gradeSystem("fifty Five");
console.log("==========marks with 35========");
gradeSystem(35);
console.log("==========marks with 75========");
gradeSystem(75);
console.log("==========marks with null========");
gradeSystem(null);
console.log("==========marks with undefined========");
gradeSystem(undefined);
console.log("==========marks with -20========");
gradeSystem(-20);
console.log("==========marks with 55========");
gradeSystem(55);
console.log("==========marks with 82========");
gradeSystem(82);
