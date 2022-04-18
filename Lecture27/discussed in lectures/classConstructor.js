class MakeCar {
  constructor(carMake, carModel, carColor, NumOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
  }

  honk(){
    alert("BEEP BEEP FUCKER")
  }
  lock(){
    alert(`Locked ${this.doors} doors`)
  }

}

let hondaCivic = new MakeCar("Honda", "Civic", "Silver", 4)