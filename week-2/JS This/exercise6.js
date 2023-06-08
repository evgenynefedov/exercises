const coffeeShop = {
    beans: 40,
    money: 10,
    costOfBean: 2,

    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 5, price: 5},
        doubleShot: {beanRequirement: 15, price: 5},
        frenchPress: {beanRequirement: 12, price: 5}
    },

    buyBeans: function(numBeans){
        if(this.money >= numBeans*this.costOfBean){
            this.beans += numBeans
            this.money -= numBeans*this.costOfBean
        } else {
            alert("There isn't enough money to buy " + numBeans + " beans")
        }
    },

    makeDrink: function (drinkType) {
        if(!this.drinkRequirements[drinkType]){
            alert("Sorry, we don’t make " + drinkType)
        } else if(this.beans < this.drinkRequirements[drinkType].beanRequirement){
            alert("Sorry, we’re all out of beans!")
        } else {
            alert("Your " + drinkType + " is ready")
            this.beans -= this.drinkRequirements[drinkType].beanRequirement
            return true
        }
        return false
    },

    buyDrink: function(drinkType){
        if(this.makeDrink(drinkType)){
            this.money += this.drinkRequirements[drinkType].price
        }
    }
}

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

console.log("you have " + coffeeShop.money + " money")
console.log("you can buy " + coffeeShop.money/coffeeShop.costOfBean + " beans")
