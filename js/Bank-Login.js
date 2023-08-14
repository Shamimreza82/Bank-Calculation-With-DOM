document.getElementById('login-btn').addEventListener('click', function () {

    const inputEmail = document.getElementById('input-email');
    const inputEmailValue = inputEmail.value;

    const inputPassword = document.getElementById('input-password');
    const inputPasswordValue = inputPassword.value;

    if (inputEmailValue === "reza@gmail.com" && inputPasswordValue === "shamimreza") {
        window.location.href = "bankLogin.html"
    }

})





