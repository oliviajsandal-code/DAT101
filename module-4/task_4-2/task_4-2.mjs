"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printOut("Lengde = " + part1Array.length + ", Verdi = " + part1Array[part1Array.length - 1]);
let part1Text = "";
for (let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
  const value = part1Array[i]; // -> Every index of part1Array
  if (i === part1Array.length - 1) {
    part1Text += value.toString() + ".";
  } else {
    part1Text += value.toString() + ", ";
  }
}
printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part2Text = part1Array.join(", ");
printOut(part2Text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Greeting = "Hello there, how are you?";
const greetingArray = part3Greeting.split(" ");
let part3Text = "";
for(let i = 0; i < greetingArray.length; i++){
  const word = greetingArray[i];
  // Here you can remove any unwanted characters e.g: , ? et.
  part3Text += "Index: " + i.toString() + " = " + word + newLine;
}
printOut(part3Text);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName){
  let deleteIndex = -1;
  for(let i = 0; i < aArray.length; i++){
    const name = aArray[i];
    if(name === aName){
      deleteIndex = i;
      break; // 
    }
  }
  if(deleteIndex >= 0){
    printOut(aName + " is found, and deleted.");
    aArray.splice(deleteIndex, 1);
  }else{
    printOut(aName + " is not found!");
  }
}

removeNameFromArray(girls, "Hilde");
printOut(girls);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = girls.concat(boys);
printOut(allNames);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
  #title;
  #author;
  #isbn;
  constructor(aTitle, aAuthor, aISBN){
    this.#title = aTitle;
    this.#author = aAuthor;
    this.#isbn = aISBN;
  }
  toString(){
    return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
  }
}

const book1 = new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
const book3 = new TBook("1984", "George Orwell", "9780451524935");
const bookArray = [book1, book2, book3];
let part6Text = "";
for (const book of bookArray) {
  part6Text += book.toString() + "<br>";
}
printOut(part6Text);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },

    Workdays: {
        value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10,
        name: "Arbeidsdager"
    },

    Weekends: {
        value: 0x20 + 0x40,
        name: "Helg"
    },
};

const weekDayKeys = Object.keys(EWeekDays);
let part7Text = "";
for (const key of weekDayKeys) {
    const day = EWeekDays[key];
    part7Text += `${key}: Value = ${day.value}, Name = ${day.name}` + newLine;
}
printOut(part7Text);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const randomNumbers = [];
for (let i = 0; i < 35; i++) {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    randomNumbers.push(randomNum);
}
function ascending(a, b) {
    return a - b;
}
function descending(a, b) {
    return b - a;
}
const ascendingNumbers = [...randomNumbers].sort(ascending);
const descendingNumbers = [...randomNumbers].sort(descending);
printOut("Original Array: " + randomNumbers.join(", "));
printOut("Ascending Order: " + ascendingNumbers.join(", "));
printOut("Descending Order: " + descendingNumbers.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const frequency = {};
for(let i = 0; i < randomNumbers.length; i++){
  if(frequency[randomNumbers[i]]){
    frequency[randomNumbers[i]] += 1;
  }else{
    frequency[randomNumbers[i]] = 1;
  }
}
let part9Text1 = "Number Frequencies:" + newLine;
for(const number in frequency){
  part9Text1 += `Number ${number} occurs ${frequency[number]} times.` + newLine;
}
printOut(part9Text1);
printOut(newLine);

function frequencySort(a, b){
  if(frequency[b] === frequency[a]){
    return a - b; // Ascending order for numbers
  }
  return frequency[b] - frequency[a]; // Descending order for frequency
}

const frequencyKeys = Object.keys(frequency);
frequencyKeys.sort(frequencySort);
const frequencyValues = [];
for(let i = 0; i < frequencyKeys.length; i++){
  const value = parseInt(frequencyKeys[i]);
  frequencyValues.push(value);
}
let part9Text2 = "Frequencies Sorted:" + newLine;
for(let i = 0; i < frequencyValues.length; i++){
  const num = frequencyValues[i];
  part9Text2 += `Number ${num} occurs ${frequency[num]} times.` + newLine;
}
printOut(part9Text2);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const rows = 5;
const cols = 9;
const matrix = [];
for(let i = 0; i < rows; i++){
  const rowArray = [];
  for(let j = 0; j < cols; j++){
    rowArray.push(`Row ${i + 1}, Col ${j + 1}`);
  }
  matrix.push(rowArray);
}
let part10Text = "";
for(let i = 0; i < rows; i++){
  for(let j = 0; j < cols; j++){
    part10Text += matrix[i][j] + " | ";
  }
  part10Text += newLine;
}
printOut(part10Text);
printOut(newLine);
