"use strict";

let grocery = ["bananas", "milk"];

const addToShoppingCart = (groceryList = "") => {
  if (groceryList != "") grocery.push(groceryList);

  if (grocery.length > 3) grocery.shift();
  return `You bought ${grocery}!`;
};

addToShoppingCart("Olive Oil");
addToShoppingCart("Gouda Cheese");
addToShoppingCart("Toilet Paper");

console.log(addToShoppingCart("Carrot"));
