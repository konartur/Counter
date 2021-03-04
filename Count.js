function Count(count) {
    const defaultValue = count;

    this.count = count || 0;

    Count.prototype.reset = function() {
       this.count = defaultValue || 0;
    }
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

Count.prototype.view = function(currentValue,result) {
    currentValue = this.count;
    result.innerHTML = currentValue;
}




