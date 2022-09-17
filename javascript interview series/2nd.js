class car {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    start() {
        console.log('car is start' + this.name)
    }
    info() {
        console.log('car price is' + this.price)
    }

}

class electricCar extends car {

    color() {
        console.log(' my color is red');
    }

    start() {
        super.start();
        super.info()
        this.color()
    }

}

let hero = new electricCar('Tesla', 5000)
hero.start()