let grades = prompt("Напишите сколько у вас оценок в школе")
let obj = {
    name: "name",
    age: "age",
    special: "major",
    grades: grades
}
console.log(JSON.stringify(obj));
if (obj.grades < 10) {
    console.log("ERROR");
}