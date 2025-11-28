"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part1a = 2 + 3 * 2 - 4 * 6;
let part1b = 2 + (3 * (2 - 4)) * 6;
printOut("2 + (3 * (2 - 4)) * 6= " + part1b);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// 25m 34cm = 2534cm = 25340mm
// 1 inch = 25.4mm
// inches = mm / 25.4
let mm = (25*1000) + (34*10);
let inches = mm / 25.4;
printOut("25 meters and 34 centimeters is: " + inches.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// 3 days, 12 hours, 14 minutes, 45 seconds into minutes
let daystominutes = 3 * 24 * 60;
let hourstominutes = 12 * 60;
let secondstominutes = 45 / 60;
let totalminutes = daystominutes + hourstominutes + 14 + secondstominutes;
printOut("3 days, 12 hours, 14 minutes= " + totalminutes.toFixed(2));    
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let minutes = 6322.52;
let days = Math.floor(minutes / (24 * 60));
let leftoverMinutes = minutes % (24 * 60);
let hours = Math.floor(leftoverMinutes / 60);
let mins = Math.floor(leftoverMinutes % 60);
let leftoverSeconds = (leftoverMinutes % 60) - mins;
let seconds = Math.round(leftoverSeconds * 60);
printOut("6322.52 minutes is: " + days + " days, " + hours + " hours, " + mins + " minutes, " + seconds + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// rate: 76 NOK = 8.6 USD
let NOK = 76;
let USD = 8.6;
let rate = NOK / USD; // NOK per USD
let rateInverse = USD / NOK; // USD per NOK
let dollars = 54;
let converted = dollars * rate;
let convertedBack = converted * rateInverse;
printOut(convertedBack.toFixed(0) + " USD" + " = " + converted.toFixed(0) + " NOK");
printOut(converted.toFixed(0) + " NOK" + " = " + convertedBack.toFixed(0) + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "Det er mye mellom himmel og jord som vi ikke forstår.";
printOut(text);
printOut("The text has " + text.length + " characters");
printOut("The character at position 19 is: " + text.charAt(19));
printOut("The substring from 35 and 8 places is: " + text.slice(35, 35 + 8));
printOut('The word "jord" starts at position: ' + text.indexOf("jord"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5 > 3 is " + (5 > 3));
printOut("7 >= 7 is " + (7 >= 7));
printOut('"a" > "b" is ' + ("a" > "b"));
printOut('"1" < "a" is ' + ("1" > "a"));
printOut('"2500" < "abcd" is ' + ("2500" < "abcd"));
printOut('"arne" !== "thomas" is ' + ("arne" !== "thomas"));
printOut("(2 === 5) === true is " + ((2 === 5) === true));
printOut('("abcd" > "bcd") === false is ' + (("abcd" > "bcd") === false));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut('"254" = ' + Number("254"));
printOut('"57.32" = ' + Number("57.32"));
printOut('"25 kroner" = ' + parseInt("25 kroner", 10));

printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.ceil(Math.random() * 360);
printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dager=(131);
let uker= Math.floor(dager / 7);
let leftoverdager= (dager % 7);
printOut(dager + " days is " + uker + " weeks and " + leftoverdager + " days.");

printOut(newLine);
