
let bank_sbi= {
    employee: 1000,
    branchesInCity: 200,
    noOfAcountHolder: 40000,
    managerName: "Umesh Yadav"
}

let bank_loacation= {
    street: "tilak road",
    city:"Aurangabad",
    pin_code:431001,
}
 
console.log(`Using Assign =`, Object.assign(bank_sbi,bank_loacation));
console.log(`Using Spread Operator=`, {...bank_sbi}, {...bank_loacation});

let rate_of_interest={
    home_loan_interest: `9%`,
    personal_loan_inrterest:`12.5%`,
    due_interest:`8%`,
}
 
let sbi_details= Object.assign(bank_sbi, bank_loacation, rate_of_interest);
console.log(`After merging Sbi_details=`, sbi_details);
 
for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(element);
    }
}