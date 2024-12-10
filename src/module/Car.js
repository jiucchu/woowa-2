import RandomNumberGenerator from "./RandomNumberGenerator.js";

export default class Car {
    constructor(name) {
        this.name = name;
        this.movement = 0;
    }

    getName() {
        return this.name;
    }

    getMovement() {
        return this.movement;
    }

    move() {
        const number = RandomNumberGenerator.generate();

        if (number >= 4) {
            this.movement++;
        }

    }
}