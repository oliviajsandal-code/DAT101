"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUp = "";
for (let i = 1; i <= 10; i++) {
    countUp += i;
    if (i < 10) {
        countUp += ", ";
    }
}
printOut(countUp);

let countDown = "";
for (let i = 10; i >= 1; i--) {
    countDown += i;
    if (i > 1) {
        countDown += ", ";
    }
}
printOut(countDown);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretNumberp1 = 45;
let guess = 0;

while (guess !== secretNumberp1) {
    guess = Math.floor(Math.random() * 60) + 1; 
}
printOut(`The number is: ${guess}`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretNumberp2 = 456738;
let guessp2 = 0;
let guessesp2 = 0;

const startTime = Date.now(); 

while (guessp2 !== secretNumberp2) {
    guessp2 = Math.floor(Math.random() * 1_000_000) + 1; 
    guessesp2++;
}

const endTime = Date.now();
const elapsedMs = endTime - startTime;

printOut("The number is: " + guessp2);
printOut("Number of guesses: " + guessesp2);
printOut("Time taken (ms): " + elapsedMs);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primesLine = "";

for (let number = 2; number < 200; number++) {
    let isPrime = true;
    let divisor = 2;

    while (divisor <= Math.sqrt(number)) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }   

    if (isPrime) {
        primesLine += number + ", ";
    }   
}
printOut(primesLine);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <=7; row++) {
    let line = "";
    for (let col = 1; col <= 9; col++) {
        line += `K${col}R${row} `;
    }
    printOut(line.trim());
}   

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const maxPoints = 236;

for (let student = 1; student <= 5; student++) {
    const points = Math.floor(Math.random() * maxPoints) + 1;
    const percent = Math.round((points / maxPoints) * 100);

let grade;
if (percent >= 89) {
    grade = "A";
} else if (percent >= 77) {
    grade = "B";
} else if (percent >= 65) {
    grade = "C";
} else if (percent >= 53) {
    grade = "D";
} else if (percent >= 41) {
    grade = "E";
} else {
    grade = "F";
}   

printOut(`Student ${student}: ${points} points, ${percent}%, Grade: ${grade}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollSixDice() {
    return [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,  
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ];
}

function countFaces(dice) {
    const counts = [0, 0, 0, 0, 0, 0];
    for (const value of dice) counts[value - 1]++;
    return counts;
}   

function simulate(label, checkFn) {
    let throws = 0;
    while (true) {
        throws++;
        const dice = rollSixDice();
        const counts = countFaces(dice);
        if (checkFn(counts)) {
        printOut(dice.join(", "));
        printOut(label);
        printOut("On " + throws + " throws!");
        printOut(newLine);
        break;
        }
    }
}

simulate("Full straight", (c) => c.every((n) => n === 1));
simulate("3 pairs", (c) => c.filter((n) => n === 2).length === 3);
simulate("Tower (4 of a kind + 2 of a kind)", (c) => c.includes(4) && c.includes(2));
simulate("Yahtzee", (c) => c.includes(6));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
