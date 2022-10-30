
const teacher={
    fulName: "Yogesh Jadhav",
    age: 34,
    ismarried: true ,
}

for (const key in teacher) {
    if (Object.hasOwnProperty.call(teacher, key)) {
        const element = teacher[key];
        console.log(element);
    }
}