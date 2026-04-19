Car.prototype.name = '111'
Car.prototype.weight = 180
Car.prototype.lang = 4800

function Car(color) {
    // this.name = '111'
    // this.weight = 180
    // this.lang = 4800
    this.color = color
}

const car = new Car('33')
car.weight = 200
console.log(car);


