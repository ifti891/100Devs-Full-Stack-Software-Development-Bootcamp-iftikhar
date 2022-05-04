//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EssPressoMachine{

  constructor(ethopian, esspresso, turkish, regular){
    this.ethopian = ethopian
    this.esspresso = esspresso
    this.turkish = turkish
    this.regular = regular
  }

  turnOn(){
    console.log("Machine is on now")
  }

  turnOff(){
    console.log("Machine is off please turn on to make the drinks")
  }

  boilWater(){
    console.log("Boiling the water to make your favourite drink")
  }
}