function Count(count,currentStep) {
    this.count = count || 0;
    this.initialState = this.count;
    this.currentStep = currentStep || 1;
}

Count.prototype.reset = function() {
    this.count = this.initialState;
}

Count.prototype.minus = function() {
        this.count = this.count - this.currentStep;
    }

Count.prototype.plus = function() {
        this.count = this.count + +this.currentStep;
    }

Count.prototype.random = function(min,max) {
    if (min === undefined && max === undefined) {
        min = 0;
        max = 10;
    }

    this.count = Math.floor(min + Math.random() * (max + 1 - min));
}







