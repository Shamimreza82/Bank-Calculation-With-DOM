document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;
    const depositInputValueString = parseFloat(depositInputValue);


    const depositDisplay = document.getElementById('display-deposit');
    const depositDisplayValue = depositDisplay.innerText;
    const depositDisplayValueString = parseFloat(depositDisplayValue);
    const total = depositDisplayValueString + depositInputValueString
    depositDisplay.innerText = total;





    depositInput.value = "";

})