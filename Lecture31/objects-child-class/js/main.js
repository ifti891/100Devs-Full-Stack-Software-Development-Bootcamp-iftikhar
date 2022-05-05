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

// Fusion of functionality and data into one object is called **Encapsulation** Baby like Goku and Vegeta fusion of becoming Gojita.


// Abstratcion --- hide details and show essential. Makes code simpler, predicitable, manageable.

class Animal{
  constructor(name){
    this.name = name
  }
  speak(){
    console.log(`${this.name} make a sound`)
  }
}

class Dog extends Animal{
  constructor(name, breed){
    super(name) // 
    this.breed = breed
  }
}


// Inheretence eleminates whole lot of redundant codes

class Cat extends Animals{
  constructor(name, breed){
    super(name)
    this.breed = breed
  }
}

class snake extends Animals{
  constructor(name, breed){
    super(name)
    this.breed = breed
  }

  speak(){
    console.log("Meow")
  }
}

let simba = new Dog('Sima', "Sheperd")
let cat = new Cat("Catu", "Persian")
let legLess = new Snake("NoLegs", "Kashmiri")

// prototype inheretance and classes are syntatical sugar baby also reuduce the reduandant codes 