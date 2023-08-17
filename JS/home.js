// Deposit Button:
document.getElementById('depositField').addEventListener('click', function () {
  const Deposit = getFieldValueFromUser('depositAmountField')
  const Current = getCurrentFieldValue('deposit')
  const newDeposit = Deposit + Current;
  setGivenValue('deposit', newDeposit);
  const currentBalance = getCurrentFieldValue('balance')
  const newBalance = Deposit + currentBalance;
  setGivenValue('balance', newBalance) 
})
document.getElementById('withdrawField').addEventListener('click', function () {
  const withdraw = getFieldValueFromUser('withdrawAmountField')
  const Current = getCurrentFieldValue('withdraw')
  const newDeposit = withdraw + Current;
  setGivenValue('withdraw', newDeposit);
  const currentBalance = getCurrentFieldValue('balance')
  const newBalance = currentBalance - withdraw;
  setGivenValue('balance', newBalance) 
})
window.history.forward();
function noBack() {
    window.history.forward();
}

// // Deposit machanism
// document.getElementById("depositField").addEventListener("click", function () {
//   // Deposit button work
//   const depositField = document.getElementById("depositAmountField");
//   const depositAmountField = depositField.value;
//   const depositAmount = parseFloat(depositAmountField);
//   // Deposit Field work
//   const deposit = document.getElementById("deposit");
//   const depositValue = deposit.innerText;
//   const oldDeposit = parseFloat(depositValue);

//   // balance section work with deposit button
//   const balance = document.getElementById("balance");
//   const balancetext = balance.innerText;
//   const oldBalance = parseFloat(balancetext);
//   // clear the field
//   depositField.value = "";
//   if (depositAmountField < 0) {
//     alert("please input a valid number");
//     return;
//   }
//   // plus to the deposit field
//   deposit.innerText = depositAmount + oldDeposit;
//   // plus to the balance field
//   balance.innerText = depositAmount + oldBalance;
// });

// // Withdraw button machanism
// document.getElementById("withdrawField").addEventListener("click", function () {
//   // withdraw button work
//   const withdrawField = document.getElementById("withdrawAmountField");
//   const withdrawAmountField = withdrawField.value;
//   const withdrawAmount = parseFloat(withdrawAmountField);

//   // withdraw field work
//   const withdraw = document.getElementById("withdraw");
//   const withdrawValue = withdraw.innerText;
//   const oldWithdraw = parseFloat(withdrawValue);

//   // balance section work
//   const balance = document.getElementById("balance");
//   const balancetext = balance.innerText;
//   const oldBalance = parseFloat(balancetext);
//   // clear the field
//   withdrawField.value = "";
//   if (withdrawAmountField < 0) {
//     alert("please input a valid number");
//     return;
//   } else if (withdrawAmountField > oldBalance) {
//     alert("You do not have sufficient balance");
//     return;
//   }
//   // plus to the withdraw field
//   withdraw.innerText = withdrawAmount + oldWithdraw;
//   // minus to the balance field
//   balance.innerText = oldBalance - withdrawAmount;
// });

