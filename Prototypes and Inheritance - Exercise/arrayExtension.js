(function solve() {
    let result;

    Array.prototype.last = function(input) {
        result = this[this.length - 1];
        return result;
    }

    Array.prototype.skip = function(n) {
        result = this.slice(n);
        return result;
    }

    Array.prototype.take = function(n) {
        result = this.slice(0, n);
        return result;
    }

    Array.prototype.sum = function() {
        result = this.reduce((sum, count) => sum += count, 0);
        return result;
    }

    Array.prototype.average = function() {
        result = this.reduce((sum, count, index) => sum += count, 0);
        result = result / this.length;
        return result;
    }
})();

