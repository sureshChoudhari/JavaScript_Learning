
let teacher = {
   fulName: "Mahesh Yadav",
   subject: "Mathematics",
   city: "Aurangabad",
   age: 42,
   degrees: {
      engineering: "BTech CSE",
      PHD: "Adv Computing",
   },
   certificates: {
      1: "Hacker Rank Participatin",
      2: "Certificate in Adv Programming",
      3: "certificate in IFE Course",
   },
   concat: function() { 
      let output = `Teacher total degrees are : ${this.engineering}, ${this.PHD} `;
      return output;
   }

}
console.log("=======After addition one property education=======");
teacher.education = "Angular Developer";
console.log(teacher);
console.log("=======After changes in fulName=======");
teacher.fulName = "Mahesh Sahebrao Yadav";
console.log(teacher);
console.log("=======After delete certificate in nasted loop=======");
delete teacher.certificates[3]
console.log(teacher);
console.log("=======After addition one more  certificate MSCIT=======");
teacher.certificates[4] = "MSCIT";
console.log(teacher.certificates);
console.log("=========In tabular format===========");
console.table(teacher);
