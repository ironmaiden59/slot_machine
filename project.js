// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
 const depositAmount = prompt("Enter a deposit amount: ")
 const numberDepositAmount = parseFloat(depositAmount);

 if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
  console.log("Invalid deposit amount, try again.");
 } else {
  return numberDepositAmount;
 }
 }  
};

const getNumbersOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ")
    const numberOfLines = parseFloat(lines);
   
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
     console.log("Invalid number of lines.");
    } else {
     return numberOfLines;
    }
    } 
}

const depositAmount = deposit();
const numberOfLines = getNumbersOfLines();
