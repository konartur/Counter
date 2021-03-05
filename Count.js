function Count(count) {
    this.count = count || 0;
    this.initialState = count || 0;
    this.currentStep = 1;
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
    min = 0;
    max = 10;
    this.count = Math.floor(min + Math.random() * (max + 1 - min));
}

Count.prototype.stepupdate = function() {
    this.stepState = this.currentStep;
}






