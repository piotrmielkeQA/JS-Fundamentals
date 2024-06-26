class Car {
    constructor(mark, model, year, color) {
        this.CarMark = mark;
        this.CarModel = model;
        this.CarYear =  year;
        this.CarColor = color;
    }

    CarIntroduce() {
        console.log(`Car ${this.markaSamochodu} nodel: ${this.modelSamochodu} year: ${this.rokSamochodu} color: ${this.kolorSamochodu}`)
    }

    showYear() {
        console.log(`Year of car is: ${this.CarYear}`)
    }
}


const fiat = new Car("Fiat", "Punto", 2010, "niebieski");
const ford = new Car("Ford", "Mondeo", 1999, "zielony");
fiat.CarIntroduce();
fiat.showYear();

ford.CarIntroduce();
ford.showYear();


class SecondClass {
    second() {
        return "Second Class"
    }
}

class FirstClass extends SecondClass{
    First() {
        return "First Class"
    }
}

const object1 = new FirstClass();
const object2 = new SecondClass();

console.log(object1.SecondClass())