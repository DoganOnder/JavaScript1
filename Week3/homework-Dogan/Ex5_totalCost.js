"use strict";

const cartForParty = {
  chips: 2.5,
  beer: 4.0,
  banana: 1.19,
  apple: 2.0,
  wine: 6.5,
};

function calculateTotalCost(cartForParty) {
  let items = Object.keys(cartForParty);
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i];
    let itemPrice = cartForParty[itemName];
    sum += Number.parseFloat(itemPrice);
  }

  return sum;
}
console.log(calculateTotalCost(cartForParty));
