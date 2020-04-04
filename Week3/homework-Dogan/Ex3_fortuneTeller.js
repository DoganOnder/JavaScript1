"use strict";
const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Alex", "Clare", "Noah", "Matthew", "Ozgur"];
const locations = ["Amsterdam", "Istanbul", "London", "Moscow", "KualaLumpur"];
const jobs = ["CEO", "CFO", "King", "Nurse", "Teacher"];

function tellFortune(
  partnerName = "",
  numberOfChildren = 0,

  geoLocation = "",
  jobTitle = ""
) {
  numberOfChildren =
    numChildren[Math.floor(Math.random() * numChildren.length)];
  partnerName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
  geoLocation = locations[Math.floor(Math.random() * locations.length)];
  jobTitle = jobs[Math.floor(Math.random() * jobs.length)];
  return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
}

console.log(tellFortune());
