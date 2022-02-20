function Car(whiel, dor, passangers, weight) {
  this.whiel = whiel
  this.dor = dor
  this.passangers = passangers
  this.weight = weight
  this.messages = function() {
    if(dor > 2 && passangers > 2) {
      console.log('You have a car')
    } else console.log('You have a truck')
  }
}

let car1 = new Car(4, 4, 3, 400)
car1.messages()

let car2 = new Car(6, 2, 2, 1000)
car2.messages()
