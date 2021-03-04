function Count(count) {
    this.count = count || 0;
    this.initialState = count || 0;
}

Count.prototype.reset = function() {
    this.count = this.initialState;
}

Count.prototype.minus = function() {
        this.count--;
    }

Count.prototype.plus = function() {
        this.count++;
    }

Count.prototype.random = function(min,max) {
    this.count = Math.floor(min + Math.random() * (max + 1 - min));
    return this.count;
}






