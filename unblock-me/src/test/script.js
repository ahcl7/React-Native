var person = require("./person");
console.log("in sc " + duong.name);
var duong = new person("duong", 20);
console.log(duong.name + " " + duong.age);
document.getElementById("p").innerHTML = duong.name;
function solve() {
    document.getElementById("p1").innerHTML = "what the fuck";
}