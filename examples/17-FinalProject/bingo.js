/* 
Filename: bingo.js
Author: Joshua Males
Date Created: December 23, 2018
Last Fix: July 4, 2019
Description: Bingo Variables and Functions
*/

// Global Variables
const NUM_ROWS = 5;
const NUM_COLS = 5;
const NUMS_PER_COL = 15;
const TABLE_SIZE = NUMS_PER_COL * NUM_ROWS;
let aPicked = [];
let aFirstLetter = ['B', 'I', 'N', 'G', 'O'];

//============================================
function drawFirstBoard()
{
    let tdNumber = 1;
    document.write('<table border="1" bordercolor="black" cellpadding=10>' + "\n");
    for (row = 0; row < NUM_ROWS; row++) {
        // Set color for each row. Write letter (B,I,N,G,O).
        switch (row) {
            case 0: document.write('<tr bgcolor="aqua">   <td><b>B</b></td>'); break;
            case 1: document.write('<tr bgcolor="yellow"> <td><b>I</b></td>'); break;
            case 2: document.write('<tr bgcolor="white">  <td><b>N</b></td>'); break;
            case 3: document.write('<tr bgcolor="fuchsia"><td><b>G</b></td>'); break;
            case 4: document.write('<tr bgcolor="lime">   <td><b>O</b></td>'); break;
        }
        // Now add the numbers for each row on the board
        for (column=0; column<NUMS_PER_COL; column++) {
            document.write('<td id="td' + tdNumber + '">' + tdNumber + '</td>');
            tdNumber++;
        }
        
        document.writeln('</tr>' + "\n");
    } // for row
    document.writeln('</table><br />' + "\n"); // Add space at bottom
    
    ClearBoard(); // Marked all numbers as not picked
} // drawFirstBoard()

//============================================
function redrawNumber(number) // between 1-TABLE_SIZE
{
    // Calculate the row for the color
    row = Math.floor((number-1) / NUMS_PER_COL);
    switch (row) {
        case 0: color = "aqua";    break;
        case 1: color = "yellow";  break;
        case 2: color = "white";   break;
        case 3: color = "fuchsia"; break;
        case 4: color = "lime";    break;
    }
    
    let cellId = "td" + number;    // Get the id for the table cell
    let cell = document.getElementById(cellId); 

    if (aPicked[number]) {
        cell.style.backgroundColor = "black"; // set the reverse color
        cell.style.color = color; // set the reverse color
    }    
    else {
        cell.style.backgroundColor = color; // set the regular color
        cell.style.color = "black"; // set the reverse color
    }    
} // redrawNumber

//============================================
function pickNumber()
{
    let i, allPicked = true;
    // If all the numbers were picked, give a warning.
    for (i=1; i <= TABLE_SIZE; i++) {
        if (!aPicked[i]) {
            allPicked = false;
            break; // Exit the loop. Not all picked.
        }    
    }

    if (allPicked) {
        alert("All numbers picked. Start a new game.");
        return;
    }
    
    do {
        // Loop until we find a number that wasn't picked
        number = Math.floor(Math.random() * TABLE_SIZE) + 1;
    } while (aPicked[number]);
            
    aPicked[number] = true;
    redrawNumber(number); // Set the colors on the board
    let lastNumberId = document.getElementById("lastNumber"); 
    let firstLettter = aFirstLetter[Math.floor((number-1) / NUMS_PER_COL)];
    lastNumberId.innerHTML = "Last Number: " + firstLettter + number;
} // pickNumber()

//============================================
function BoardIsEmpty()
{
    for (i=0; i<=TABLE_SIZE; i++) {
        if (aPicked[i])
            return false;
    }
    return true;
} // BoardIsEmpty

//============================================
function ClearBoard()
{
    for (i=0; i<=TABLE_SIZE; i++) {
        aPicked[i] = false;
    }    
} // ClearBoard()

//============================================
function redrawBoard()
{
    for (number=1; number<=TABLE_SIZE; number++)
        redrawNumber(number);
    let lastNumberId = document.getElementById("lastNumber"); 
    lastNumberId.innerHTML = "Last Number: ";
} // redrawBoard()

//============================================
function restartGame()
{
    if (!BoardIsEmpty()) {
        if (confirm("Are you sure you want to restart?")) {
            ClearBoard();
            redrawBoard();
            alert("Game Restarted");
        }    
    }    
} // restartGame()

//============================================
function createCard()
{
    // Use the homework assignment from week 14 (2D Arrays)
} // createCard()
