
function inputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldConvert = parseFloat(inputFieldString);
    inputField.value = "";
    return inputFieldConvert;
}

function inputTextField(inputId) {
    const inputTextField = document.getElementById(inputId);
    const inputTextFieldString = inputTextField.innerText;
    const inputTextFieldConvert = parseFloat(inputTextFieldString);
    return inputTextFieldConvert;
}

function valueDisplay(inputId, total) {
    const valueDisplay = document.getElementById(inputId);
    const valueDisplayIn = valueDisplay.innerText;
    valueDisplay.innerText = total;
} 
