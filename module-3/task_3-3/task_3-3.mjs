"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}
function printTodayNorwegianDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("no-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});
printOut(capitalizeWords(formattedDate));
}

printTodayNorwegianDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodatDateObjectAndPrint() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("no-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});
printOut(capitalizeWords(formattedDate));
return today;
}

function daysUntil2XKO(fromDate) {
    const releaseDate = new Date(2025, 4, 14);
    const start = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
    const end = new Date(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate());
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.round((end - start) / msPerDay);
}

const todayDate = getTodatDateObjectAndPrint();
const daysLeft = daysUntil2XKO(todayDate);
printOut(`It is ${daysLeft} days to release of 2XKO!`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleStats(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut(`Diameter is ${diameter}`);
    printOut(`Circumference is ${circumference.toFixed(2)}`);
    printOut(`Area is ${area.toFixed(2)}`);
}
printCircleStats(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleStats(rectangle) {
    const width = rectangle.width;
    const height = rectangle.height;

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut(`Rectangle width: ${width}, height: ${height}`);
    printOut(`Circumference is ${circumference.toFixed(2)}`);
    printOut(`Area is ${area.toFixed(2)}`);
}
printRectangleStats({ width: 4, height: 3 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temperature, type) {
    const unit = type.toUpperCase();

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "C") {
        celsius = temperature;
        fahrenheit = (celsius * 9) / 5 + 32;
        kelvin = celsius + 273.15;
    } else if (unit === "F") {
        fahrenheit = temperature;
        celsius = ((fahrenheit - 32) * 5) / 9;
        kelvin = celsius + 273.15;
    } else if (unit === "K") {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9) / 5 + 32;
    } else {
        printOut("Unknown temperature type!");
        return;
    }
    printOut(`Celsius = ${Math.round(celsius)}`);
    printOut(`Fahrenheit = ${Math.round(fahrenheit)}`);
    printOut(`Kelvin = ${Math.round(kelvin)}`);
}

printOut("Convert 47 Celsius:");
convertTemperature(47, "C");
printOut(newLine);

printOut("Convert 100 Fahrenheit:");
convertTemperature(100, "F");
printOut(newLine);

printOut("Convert 300 Kelvin:");
convertTemperature(300, "K");
printOut(newLine);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function priceWithoutVAT(gross, vatGroup) {
    const group = vatGroup.toLowerCase();
    let vat;

    if (group === "normal") {
        vat = 25;
    } else if (group === "food") {
        vat = 15;
    } else if (group === "hotel" || group === "transport" || group === "cinema") {
        vat = 10;
    } else {
        return NaN;
    }

    return (100 * gross) / (vat + 100);
}

const net1 = priceWithoutVAT(100, "normal");
if (!Number.isNaN(net1)) 
    printOut(`100 is ${net1.toFixed(2)} without tax`);

const net2 = priceWithoutVAT(150, "food");
if (!Number.isNaN(net2)) 
    printOut(`150 is ${net2.toFixed(2)} without tax`);

const net3 = priceWithoutVAT(50, "cinema");
if (!Number.isNaN(net3)) 
    printOut(`50 is ${net3.toFixed(2)} without tax`);

const net4 = priceWithoutVAT(200, "textile");
if (Number.isNaN(net4)) {
  printOut("Textile is an unknown vat group");
} else {
  printOut(`200 is ${net4.toFixed(2)} without tax`);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function travelCalc(speed, distance, time) {
    const missingSpeed = speed == undefined;
    const missingDistance = distance == undefined;
    const missingTime = time == undefined;

    const missingCount = Number(missingSpeed) + Number(missingDistance) + Number(missingTime);
    if (missingCount !== 1) return NaN;

    if (missingSpeed) return distance / time;
    if (missingDistance) return speed * time;
    return distance / speed;
}
function printTrip(speed, distance, time) {
    const s = speed == undefined ? travelCalc(undefined, distance, time) : speed;
    const d = distance == undefined ? travelCalc(speed, undefined, time) : distance;
    const t = time == undefined ? travelCalc(speed, distance, undefined) : time;

printOut(`Speed = ${Number.isNaN(s) ? "undefined" : s.toFixed(2)} km/h`);
printOut(`Distance = ${Number.isNaN(d) ? "undefined" : d.toFixed(2)} km`);
printOut(`Time = ${Number.isNaN(t) ? "NaN" : t.toFixed(2)} h`);
}

printTrip(undefined, 50, 0.67);
printOut(newLine);
printTrip(60, 120, undefined);
printOut(newLine);
printTrip(70, undefined, 1.5);
printOut(newLine);
printTrip(undefined, 50, undefined);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function padText(text, maxSize, char, insertBefore) {
    let result = text;

    if (result.length < maxSize) {
        const missing = maxSize - result.length;
        const padding = char.repeat(missing);
        result = insertBefore ? padding + result : result + padding;
    }

    return result;
}

const paddedLeft = padText("This is a text", 20, "*", true);
const paddedRight = padText("This is a text", 20, "", false);

printOut(`"${paddedLeft}"`);
printOut(`"${paddedRight}"`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NBSP = "\u00A0";

function printMathLine(linesToTest, linesToPrint = 7) {
  let currentNumber = 1;
  const rows = [];

  for (let line = 1; line <= linesToTest; line++) {
    let leftSum = 0;
    let rightSum = 0;
    const leftNums = [];
    const rightNums = [];


    for (let i = 0; i < line + 1; i++) {
      leftNums.push(currentNumber);
      leftSum += currentNumber++;
    }
  
    for (let i = 0; i < line; i++) {
      rightNums.push(currentNumber);
      rightSum += currentNumber++;
    }

    rows.push({ leftNums, rightNums, leftSum, rightSum, line });

    if (leftSum !== rightSum) {
      printOut(`Test failed at line ${line}: Left sum: ${leftSum}, Right sum: ${rightSum}`);
      return;
    }
  }

  let maxLeftLen = 0;
  for (let i = 0; i < Math.min(linesToPrint, rows.length); i++) {
    const leftStr = rows[i].leftNums.join(" ");
    if (leftStr.length > maxLeftLen) maxLeftLen = leftStr.length;
  }

  for (let i = 0; i < Math.min(linesToPrint, rows.length); i++) {
    const leftStr = rows[i].leftNums.join(" ");
    const rightStr = rows[i].rightNums.join(" ");
    const lineOut = leftStr.padEnd(maxLeftLen + 1, NBSP) + " = " + rightStr;
    printOut(lineOut);
  }
  printOut("Maths fun!");
}

printMathLine(200, 7);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
Recursive function. Create a function that calculates the factorial of a given number.<br>
Factorial of 5 = 5 * 4 * 3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.<br>
Have the function call itself to calculate the result and print the final answer.<br>
Print the result of each intermediate multiplication step as well.
<br>
`);
let Part10IntermediateSteps = "";
let Part10Step = 0;
function Part10Factorial(aNumber) {
  if (aNumber <= 1) {
    return 1;
  } else {
    const result = aNumber * Part10Factorial(aNumber - 1);
    Part10Step++;
    Part10IntermediateSteps += `Step ${Part10Step}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
    return result;
  }
}
const numberForFactorial = 5;
const factorialResult = Part10Factorial(numberForFactorial);
printOut(`Factorial of ${numberForFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>" + Part10IntermediateSteps);
printOut(newLine);
