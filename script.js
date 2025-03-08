let sel1 = document.getElementById("sel1");
let sel2 = document.getElementById("sel2");
let sel3 = document.getElementById("sel3");
function func1() {
    localStorage.clear();
    localStorage.setItem("sel1", sel1.value)
    localStorage.setItem("sel2", sel2.value)
    localStorage.setItem("sel3", sel3.value)
}