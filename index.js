class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
    
    set diameter(val) {
        this.radius = val / 2;
    }

    set circumference(val) {
        this.radius = val / Math.PI / 2;
    }

    set area(val) {
        this.radius = Math.sqrt(val / Math.PI);
    }
}