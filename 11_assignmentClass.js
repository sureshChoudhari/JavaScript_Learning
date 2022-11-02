
class Bank{
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
    details(){
        console.log(`Bank Details: ${this.bank_name} ${this.location} ${this.account_no} ${this.ifsc} ${ this.interest_rate}`);
    }
}

let axis_bank= new Bank("Axis", "Aurangabad", 1213456, "ax4333524", "12%");
let sbi_bank= new Bank("Sbi", "Pune", 8765432, "Sbi986123", "10%");
let icici_bank= new Bank("ICICI", "Beed", 99987765, "ici1984", "13%");
let kotak_bank= new Bank("Kotak", "Jalna", 9834671233, "kot12398", "12%");
let hdfc_bank= new Bank("HDFC", "Latur", 872345456, "hdf652398", "14%");
let panjab_bank= new Bank("Panjab", "Mumbai", 762234512, "pan6431221", "10%");
 
const array = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank]
console.log(array);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if(element.bank_name=kotak_bank) {
//         console.log(` ${element.bank_name}  ${element.location}  ${element.account_no} ${element.ifsc} ${element.interest_rate}  `);
//     }
// }

for (const iterator of kotak_bank) {
    
    console.log(` ${bank_name}  ${location}  ${account_no} ${ifsc} ${interest_rate}  `);  
}