var solver = require("./solver");
var helper = require("../helpers/helper");
var board = require("./board");
var block = require("./block");

function randomColor() {
    var color = '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
    var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    var r = (parseInt(c[1], 16) - 32) > 0 ? (parseInt(c[1], 16) - 32) : 0;
    var g = (parseInt(c[2], 16) - 32) > 0 ? (parseInt(c[2], 16) - 32) : 0;
    var b = (parseInt(c[3], 16) - 32) > 0 ? (parseInt(c[3], 16) - 32) : 0;

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
// var set = new SortedSet();
const cm = {maxLen: 6};
function onclick() {
    console.log("clicked!");
}
var table = [];

for( var i =0 ; i<cm.maxLen ;i++) {
    var row = [];
    for(var j=0; j< cm.maxLen; j++) {
        row.push(0);
    }
    table.push(row);
}

var status = 0;
function changeColor(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}
var lastId;
var color;
var blocks = [];
function solve() {
    var sol = new solver(new board(blocks));
    sol.solvePuzzel();
}
var img_id = cm.maxLen * cm.maxLen;
var lastClick = -1;
function remove(id) {
    console.log(id);
    var n = blocks.length;
    for( var i =0 ; i< n ; i++) {
        if (blocks[i].id == id) {
            blocks.splice(i,1);
            break;
        }
    }
    for(var i =0 ;i< cm.maxLen; i++) {
        for (var j=0;j<cm.maxLen; j++) {
            if (table[i][j] == id) {
                table[i][j] = 0;
                document.getElementById((i*cm.maxLen+j).toString()).style.backgroundColor = "white";
            }
        }
    }

    document.getElementById("body").removeChild(document.getElementById(id));
    solve();
}

function addBlock(x , y , x1 , y1, img_id) {
    var new_img = document.createElement("img");
    var doc = (y==y1);
    var type = 0;
    if (doc) {
        new_img.src = "./../../img/block_ver.png";
        type = 1;
    }
    else if (x == 2) {
        new_img.src = "./../../img/block_red.png";
        type = 2;
    }
    else new_img.src = "./../../img/block_hor.png";
    new_img.id = img_id;
    new_img.style.height = ((x1-x+1) * 100) + "px";
    new_img.style.width = (y1 - y + 1) * 100 + "px";
    new_img.style.position = "absolute";
    new_img.style.top = (x * 100) + "px";
    new_img.style.left = (y *100) + "px";
    new_img.style.zIndex = 0;
    new_img.onclick = function() {
        if (lastClick == this.id) {
            remove(this.id);
            lastClick = -1;
        } else lastClick = this.id;
    }
    var len = Math.abs(x-x1) + Math.abs(y - y1) + 1;
    document.getElementById("body").appendChild(new_img);
    // console.log(sol.board.blocks);
    blocks.push(new block({x: y, y: x} , type,  len, img_id));
    console.log(blocks);
    solve();    
}
function updateColor(first, second, color) {
    first = parseInt(first);
    second = parseInt(second);
    if (first > second) {
        var tmp = first;
        first = second;
        second = tmp;
    }
    var x = Math.floor(first / cm.maxLen);
    var y = first % cm.maxLen;
    var x1 = Math.floor(second / cm.maxLen);
    var y1 = second % cm.maxLen;
    console.log(x + " " + y);
    console.log(x1 + " " + y1);
    var len = Math.abs(x-  x1) + Math.abs(y - y1) + 1;
    
    if (len == 1) {
        console.log("remove" + table[x][y]);
        remove(table[x][y]);
        return;
    }
    if (len < 2) {
        console.log("len < 2");
        return;
    }
    if (x!=x1 && y!=y1) {
        console.log("not vertical or hori");
        return;
    } else {
        for(var i = x; i<=x1 ;i++) {
            for(var j = y; j<= y1; j++) {
                if (table[i][j] == 1) {
                    console.log("intersec");
                    return;
                }
            }
        }
        img_id ++;    
        for(var i = x; i<=x1 ;i++) {
            for(var j = y; j<= y1; j++) {
                changeColor(i * cm.maxLen + j , color);
                table[i][j] = img_id;
            }
        }
        addBlock(x , y , x1 , y1, img_id);
    }
}



// function onload() {
    document.getElementById("button").onclick = solve;
    console.log("onload");
    var row = cm.maxLen;
    var col = cm.maxLen;
    for(var i = 0; i<row;i++) {
        var new_tr = document.createElement("tr");
        for(var j =0 ;j<col;j++) {
            var new_td = document.createElement("td");
            new_td.id = i * cm.maxLen + j;
            new_td.style.zIndex = 1;
            new_td.onclick = function() {
                console.log(this.id);
                status = (parseInt(status) + 1) %2;
                console.log(status);
                console.log(lastId);
                lastClick = -1;
                if (status == 0) {
                    updateColor(lastId, this.id, color);
                } else {
                    lastId = this.id;
                    color = randomColor();
                    console.log(color);
                }
            };
            new_tr.appendChild(new_td);
        }
        document.getElementById("table").appendChild(new_tr);
    }
// }