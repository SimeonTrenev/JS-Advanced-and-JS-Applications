function fruit(fruit, weightInGrams, pricePerKilo){

    let neededMoney = (weightInGrams / 1000) * pricePerKilo

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`)

}
fruit('orange', 2500, 1.80)