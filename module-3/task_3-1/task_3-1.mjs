"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2 and 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = Math.floor(Math.random() * 3) + 6; // Random number between 6 and 8
  printOut("Wake up time = " + wakeUpTime);
if (wakeUpTime === wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4 and 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const num = 1; // You can change this value to test different outputs
 printOut("Part 4 value = " + num);
if (num > 0) {
  printOut("Value is Positive.");
} else if (num < 0) {
  printOut("Value is Negative.");
} else {
  printOut("Value is Zero.");
}
printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const image = Math.floor(Math.random() * 8) + 1;
printOut("Part 6 photo size = " + image);
if (image < 4) {
  printOut("The image is to small");
} else if (image > 6) 
  printOut("The image is to large");
else {
  printOut("Thank you");
}
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthlist.length;
const monthName = monthlist[Math.floor(Math.random() * noOfMonth)];
printOut("Month is = " + monthName);
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let daysInMonth;

if (monthName === "February") {
  daysInMonth = 28;
} else if (monthName === "April" || monthName === "June" || monthName === "September" || monthName === "November") {
  daysInMonth = 30;
} else {
  daysInMonth = 31;
} 
printOut("It is " + daysInMonth + " days in " + monthName + ".");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let galleryMessage = 'The Art gallery is open in ' + monthName + ', Welcome!';
if (monthName === "April") {
  galleryMessage = "The Art gallery is open in April, Welcome!";
} else if (monthName === "March" || monthName === "May") {
  galleryMessage = 'The Art gallery is closed in ' + monthName + ' due to refurbishment.';
}
printOut(galleryMessage);
printOut(newLine);
