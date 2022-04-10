//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size, toppings, crust, sauce){
  this.size = size
  this.toppings= toppings
  this.crust= crust
  this.sauce=sauce

  this.estimatedDeliveryTime=function(){
    console.log("Caculating....")
  }

  this.brunMouth = function(){
    console.log("fjhgeuehkkahhheiiii")
  }

  this.frisbee = function(){
    console.log("yeeeeetttttt")
  }
}

let pizza = new PizzaMachine("large"["olives", "mushrooms"], "deep dish", "white")