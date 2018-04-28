class board {
    constructor (blocks) {
        this.blocks = blocks;
    }
    equals(other) {
        var n = this.blocks.length;
        var n1 = other.blocks.length;
        if (n!=n1) return false;
        for(var i=0;i<n;i++) {
            if (!this.blocks[i].equals(other.blocks[i])) return false;
        }
        return true;
    }
    compare(other) {
        var n = this.blocks.length;
        var n1 = other.blocks.length;
        if (n!=n1) return n - n1;
        for(var i=0;i<n;i++) {
            if (!this.blocks[i].equals(other.blocks[i])) 
                return this.blocks[i].compare(other.blocks[i]);
        }
        return 0;
    }
}
module.exports = board;