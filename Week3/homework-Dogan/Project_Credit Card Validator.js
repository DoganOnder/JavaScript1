"use strict";

function validateCard(cardNum) {
  // The credit card number must be 16 digits in length
  if (cardNum.length !== 16) {
    return false;
  }

  // Digits must be numbers
  for (let i = 0; i < cardNum.length; i++) {
    // store the current digit
    let currentNumber = cardNum[i];

    // turn the digit from a string to an integer
    currentNumber = Number.parseInt(currentNumber);

    if (!Number.isInteger(currentNumber)) {
      return false;
    }
  }

  let obj = {};
  for (let i = 0; i < cardNum.length; i++) {
    obj[cardNum[i]] = true;
  }
  if (Object.keys(obj).length < 2) {
    return false;
  }

  // The final digit of the credit card number must be even
  if (cardNum[cardNum.length - 1] % 2 !== 0) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < cardNum.length; i++) {
    sum += Number(cardNum[i]);
  }
  if (sum <= 16) {
    return false;
  }

  return true;
}

// Check
console.log(validateCard("7799779966662222")); //true
console.log(validateCard("z5233255k3011124")); //false
