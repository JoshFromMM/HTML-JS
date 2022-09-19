//==========================================================
// Filename: digits.js
// Author: Joshua Males
// Date Created: November 4, 2018
// Last Fix: November 4, 2018
// Description: Digit Functions
//==========================================================
function getOnesDigit(inNumber)
{
    return inNumber % 10;
} // getOnesDigit

//==========================================================
function sumOfDigits(inNumber)
{
    let sum = 0;
     while (inNumber) {
         sum += getOnesDigit(inNumber); // Add the ones digit
         inNumber = Math.floor(inNumber / 10); // Cut off the ones digit
     } // while
    return sum;
} // sumOfDigits

//==========================================================
function numberOfDigits(inNumber)
{
    let digits = 0;
     while (inNumber) {
         digits++;
         inNumber = Math.floor(inNumber / 10); // Cut off the ones digit
     } // while
    return digits;
} // numberOfDigits

