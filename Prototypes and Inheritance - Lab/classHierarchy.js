function solve() {

    class Figure {

        constructor(unit) {
            this.unit = this.changeUnits(unit);
        }

        toString() {
            return `Figures units: ${this.unit}`
        }
    }

    Figure.prototype.changeUnits = function (input) {

        if (input === 'mm') {
            return this.unit = 'mm';
        } else if (input === 'm') {
            return this.unit = 'm'
        } else {
            return this.unit = 'cm';
        }
    }

    class Circle extends Figure {

        #outputRadius;

        constructor(radius, unit) {
            super(unit);
            this.radius = radius;
        }

        get area() {

            this.#outputRadius = this.radius;

            if (this.unit === 'mm') {
                this.#outputRadius = this.radius * 10;
            } else if (this.unit === 'm') {
                this.#outputRadius = this.radius / 100;
            }

            return Math.PI * this.#outputRadius * this.#outputRadius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.#outputRadius}`;
        }
    }

    class Rectangle extends Figure {

        #outputWidth;
        #outputHeight;

        constructor(width, height, unit) {
            super(unit);
            this.width = width;
            this.height = height;
        }

        get area() {

            this.#outputWidth = this.width;
            this.#outputHeight = this.height;

            if (this.unit === 'mm') {
                this.#outputHeight *= 10;
                this.#outputWidth *= 10;
            } else if (this.unit === 'm') {
                this.#outputWidth *= 100;
                this.#outputHeight /= 100;
            }

            return this.#outputWidth * this.#outputHeight;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.#outputWidth}, height: ${this.#outputHeight}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200 
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

// r.changeUnits('cm');
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4


c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

