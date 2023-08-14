document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;
    const depositInputValueString = parseFloat(depositInputValue);


    const depositDisplay = document.getElementById('display-deposit');
    const depositDisplayValue = depositDisplay.innerText;
    const depositDisplayValueString = parseFloat(depositDisplayValue);
    const total = depositDisplayValueString + depositInputValueString
    depositDisplay.innerText = total;

    const TotalBalance = document.getElementById('Total-balance');
    const totalBankBalance = TotalBalance.innerText;
    const depositTotalAmount = parseFloat(totalBankBalance);
    const totalAmount = depositTotalAmount + total;
    TotalBalance.innerText = totalAmount;

    depositInput.value = "";

})