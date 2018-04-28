class block {

    constructor(pos, type, len) {
        this.pos = pos;
        this.type = type;
        this.len = len;
    }
    equals(other){
        return (this.pos.x == other.pos.x && 
                this.pos.y == other.pos.y && 
                this.type  == other.type && 
                this.len == other.len );
    } 
    compare(other) {
        if (this.pos.x == other.pos.x) { 
            if (this.pos.y == other.pos.y) {
                if (this.type  == other.type) {
                    return this.len - other.len;
                }
                else return this.type - other.type;
            }
            else return this.pos.y - other.pos.y;
        } else return this.pos.x - other.pos.x;
    }
}
module.exports = block;