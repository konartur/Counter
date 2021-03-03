function Count(count) {
        this.count = count || 0;
    }

Count.prototype.minus = function() {
        this.count--;
    }

Count.prototype.plus = function() {
        this.count++;
    }

    Count.prototype.reset = function() {
        this.count = 0;
    }




