document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotalValue = withdrawInput.value;
    const withdrawTotalValueString = parseFloat(withdrawTotalValue);
    withdrawInput.value = "";
    if (isNaN(withdrawTotalValueString)) {
        alert("please Provide a number");
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValue = withdrawAmount.innerText;
    const withdrawAmountValueString = parseFloat(withdrawAmountValue);
    const withdrawTotal = withdrawAmountValueString + withdrawTotalValueString;
    withdrawAmount.innerText = withdrawTotal;


    const TotalBalance = document.getElementById('Total-balance');
    const TotalBalanceValue = TotalBalance.innerText;
    const TotalBalanceValueString = parseFloat(TotalBalanceValue);
    const totalBalanceWithdraw = TotalBalanceValueString - withdrawTotal;
    TotalBalance.innerText = totalBalanceWithdraw;


    if (totalBalanceWithdraw < withdrawTotal) {
        alert("Dont hava a anagfe Balance");
        return;
    }


})

