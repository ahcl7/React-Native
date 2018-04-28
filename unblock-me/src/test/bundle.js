(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
module.exports = person;
},{}],2:[function(require,module,exports){
var person = require("./person");
console.log("in sc " + duong.name);
var duong = new person("duong", 20);
console.log(duong.name + " " + duong.age);
document.getElementById("p").innerHTML = duong.name;
function solve() {
    document.getElementById("p1").innerHTML = "what the fuck";
}
},{"./person":1}]},{},[2]);
