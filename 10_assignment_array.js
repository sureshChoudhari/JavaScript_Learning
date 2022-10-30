
const array_nums = [20, 3, 56, 90, 400, 49];
let array_shallow = array_nums;
array_shallow.push(55);
array_shallow.push(66);
console.log(`------use Shallow Clone------`);
console.log(array_nums);
console.log(array_shallow);

let array_deep = [...array_nums];
array_nums.push(10);
array_nums.push(25);
console.log(`------use Deep Clone------`);
console.log(array_nums);
console.log(array_deep);

console.log(`------After Spread Array------`);
const array_even = [2, 30, 24, 8];
const array_spread = [...array_nums, ...array_even];
console.log(array_spread);
console.log(`============================================`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR",
    },
    adress: {
        locality: {
            colony: "OM Vridavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
    },
    mobile: ["+91 8600 3456 88", "1800 4567 32", "+91 9096 5678 77"]
}

console.log(employee_info.adress);
console.log(employee_info.mobile);
console.log(`============================================`);

const employee_updated = employee_info;
employee_info.street = "NH 52"
console.log(employee_info);
console.log(employee_updated);
console.log(`============================================`);
employee_info.mobile = 9403627379;
console.log(employee_info.mobile);
console.log(employee_updated.mobile);
console.log(`============================================`);

let employee_new = JSON.parse(JSON.stringify(employee_info));
employee_info.salary.july_month = "80,0000INR";
employee_info.adress.country = "United Kingdom";
console.log(employee_info.salary.july_month, employee_info.adress.country );
console.log(employee_new.salary.july_month, employee_new.adress.country);