var helper = require("../helpers/helper");
var common = require("../helpers/common");
var sortedSet = require("collections/sorted-set");
var sortedMap = require("collections/sorted-map");
var deque = require("collections/deque");
var Board = require("./board");
var block = require("./block");
class solver {
    
    constructor(board) {
        this.map = new sortedMap();
        this.dis = new sortedMap();
        this.set = new sortedSet();
        this.queue = new deque();
        this.board = board;
    }
    addBlock(block) {
        // console.log(this.board.blocks);
        this.board.blocks.push(block);
    }
    print(blocks){
        // console.log(blocks);
        // return;
        var t = [];
        for(var i = 0 ;i<common.maxLen; i++) {
            var tmp = [];
            for(var j=0; j<common.maxLen; j++) {
                tmp.push('=');
            }
            t.push(tmp);
        }
        var n = blocks.length;
        for(var i =0 ;i<n;i++) {
            var block = blocks[i];
            if (block.type == 1) {
                for(var j = block.pos.y ; j < block.pos.y + block.len;j++) {
                    t[j][block.pos.x] = String.fromCharCode(i+65);
                }
            } else {
                for(var j = block.pos.x ; j < block.pos.x + block.len;j++) {
                    t[block.pos.y][j] = String.fromCharCode(i +65);
                }
            }
        }
        for(var i =0 ; i < common.maxLen; i++) {
            console.log(t[i].join(""));
        }
        console.log("");
    }
    trace(board, callback){
        var preBlocks = this.map.get(board)
        if (!preBlocks) {
            this.cnt = 0;
            console.log(this.cnt);
            this.print(board.blocks);
            callback();
            return;
        }
        else  {
            this.trace(preBlocks, callback);
            this.cnt++;
            console.log(this.cnt);
            this.print(board.blocks);
        }
    }
    solve(stopCondition, callback) {
        this.set.clear();
        this.map.clear();
        this.queue.clear();
        this.dis.clear();
        this.set.add(this.board);
        this.map.set(this.board, null);
        this.queue.add(this.board);
        var cnt = 0;
        var lastState = null;
        this.dis.set(this.board, 0);
        // console.log(stopCondition(this.board.blocks));
        // return;
        var ok = true;
        while (this.queue.length !=0) {
            var board = this.queue.shift();
            lastState = board;
            // this.print(board.blocks.slice(0));
            cnt++;
            // if (cnt==20) break;
            if (stopCondition(board.blocks)) {
                console.log("stop");
                callback(board);
                ok = false;
                break;
            }
            var curStepCnt = this.dis.get(board);
            var blocks = board.blocks.slice(0);
            // console.log(blocks == board.blocks);
            var n = blocks.length;
            for(var i =0 ;i <n; i++) {
                var seg = helper.getSegment(blocks, i);
                // console.log(seg);
                var type = blocks[i].type;
                // for(var j=0;j<blocks.length;j++) nextBlock.push(blocks[j]);                   
                for(var j = seg.l; j<= seg.r; j++) {
                    var nextBlock = blocks.slice(0);
                    for( var k = 0; k<n;k++) {
                        nextBlock[k] = new block(
                            {x: nextBlock[k].pos.x, y: nextBlock[k].pos.y} , 
                                nextBlock[k].type, nextBlock[k].len);
                        }
                    if (type==1) nextBlock[i].pos.y = j;
                    else nextBlock[i].pos.x = j;
                    var nextBoard = new Board(nextBlock);
                    // this.print(nextBoard.blocks);
                    // return;
                    // console.log(nextBoard.blocks);
                    if (!this.set.has(nextBoard)) {
                        // this.print(nextBoard.blocks);
                        this.set.add(nextBoard);
                        this.map.set(nextBoard, board);
                        this.dis.set(nextBoard, curStepCnt + 1);
                        this.queue.add(nextBoard);
                    }
                }
            }
        }
        if (ok) callback(lastState);
    }
    
    solvePuzzel() {        
        var stop = (blocks) => {
            // return false;

            // console.log(blocks[0].pos.x);
            if (blocks[0].pos.x == common.maxLen - blocks[0].len) {
                return true;
            }
            return false;
        }

        
        var bruceAll = (blocks) => {
            return false;
        }


        var start = new Date();
        this.solve(bruceAll, (lastStateBlock)=> {
            var end = new Date();
            console.log("what the fuck");
            console.log((end.getTime() - start.getTime())/ 1000);
            // this.print(lastStateBlock.blocks);
            if (lastStateBlock) {
                console.log("first step done!");                
                if (stop(lastStateBlock.blocks)) {
                    console.log("NO SOLUTION!");
                } else {

                    console.log("steps = " + this.dis.get(lastStateBlock));
                    // console.log(lastStateBlock.blocks);
                    // this.trace(lastStateBlock, ()=> {
                    //     this.board = lastStateBlock;

                    // });
                    // this.board = lastStateBlock;
                    // this.solve(bruceAll , (lastState)=> {
                    //     console.log(lastState.blocks);
                    //     console.log(this.dis.get(lastState));
                    //     console.log("done");
                    // })
                }
            }
        });
    }
}
module.exports = solver;