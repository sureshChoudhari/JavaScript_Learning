console.log(`---------Step 1)------`);
function maleMarriageEligibility(gender, age, boyName) {
    var result = gender == `Male` && age >= 21 ? `Hey ${boyName} you are eligible for Marriage`
        : `Not eligible for Marriage`
    console.log(result);
    return result;
}
maleMarriageEligibility("Male", 25, "Billgates");

maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log(`---------Step 2)------`);
function femaleMarriageEligibility(gender, age, girlName){
    if(gender==`Female` && age>=18){
    console.log(`Hey ${girlName} you are eligible for Marriage`);
    }else{
        console.log(`Not eligible for Marriage`);
    }
}
femaleMarriageEligibility("Female",16,"Jenifer");

femaleMarriageEligibility("Female",27,"Malinda Gates");