var solver = require("./solver");
var helper = require("../helpers/helper");
var board = require("../solver/board");
var Set = require("collections/sorted-set");
function solve() {
    console.log("solve");
    var blocks = new board(helper.genBlocks(2));
    var sol = new solver(blocks);
    sol.solvePuzzel();    
}
// var ar = [1 , 2];
// var br = ar.slice(0);
// br[0] = 2;
// console.log(ar == br);
// console.log(ar);
// console.log(br);