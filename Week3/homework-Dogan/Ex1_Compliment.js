("use strict");
function giveCompliment(yourName = " ") {
  const compliments = [
    " sophisticated ",
    " Spiritid ",
    " electrifying ",
    " regal ",
    " angelic ",
    " wondrous ",
    " uniqe ",
    " appealing ",
    " graceful ",
    " alluring ",
  ];

  let randomNumber = Math.floor(Math.random() * compliments.length);
  return "You are " + compliments[randomNumber] + ", " + yourName;
}
console.log(giveCompliment("Dogan"));
console.log(giveCompliment("Dogan"));
console.log(giveCompliment("Dogan"));
