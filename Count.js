function Count(count,step) {
    this.count = count || 0;
    this.initialState = count || 0;
    this.stepState = step || 1;
}

Count.prototype.reset = function() {
    this.count = this.initialState;
}

Count.prototype.minus = function() {
        this.count = this.count - this.stepState;
    }

Count.prototype.plus = function() {
        this.count = this.count + +this.stepState;
    }

Count.prototype.random = function(min,max) {
    this.count = Math.floor(min + Math.random() * (max + 1 - min));
}






