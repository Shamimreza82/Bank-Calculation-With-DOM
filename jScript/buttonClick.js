document.getElementById('deposit-btn').addEventListener('click', function () {
    const InputFieldTotal = inputField('deposit-input');
    const inputTextTotal = inputTextField('display-deposit');
    const Total = InputFieldTotal + inputTextTotal;
    valueDisplay('display-deposit', Total);
    const inputBalanceTextTotal = inputTextField('Total-balance');
    const totalBalance = inputBalanceTextTotal + Total;
    valueDisplay('Total-balance', totalBalance);
})



document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputFieldTotal = inputField('withdraw-input');
    const withdrawInputTextTotal = inputTextField('withdraw-amount');
    const withdrawTotal = withdrawInputFieldTotal + withdrawInputTextTotal;
    valueDisplay('withdraw-amount', withdrawTotal);
    const inputBalanceTextTotal = inputTextField('Total-balance');
    const withdrawTotalBalance = inputBalanceTextTotal - withdrawInputFieldTotal;
    valueDisplay('Total-balance', withdrawTotalBalance);

})