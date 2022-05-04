//Create an a class and extend it - Can be anything you would like it to be! 

class Factory{
  constructor(car, machines, tools){
    this.car = car;
    this.machine = machine;
    this.tools = tools;
  }
}

class Machines extends Factory{
  constructor(parts, bigParts){
    this.parts = parts;
    this.bigParts = bigParts;
  }
}

// Fusion of functionality and data into one object is called **Encapsulation** Baby