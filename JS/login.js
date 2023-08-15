document.getElementById('btnLogin').addEventListener('click', function(){
    // getting email Input
    const emailInput = document.getElementById('loginField')
    const Email = emailInput.value;
    // console.log(Email)
    const passwordInput = document.getElementById('PasswordField')
    const Password = passwordInput.value;
    // console.log(Password);
    if (Email === 'rifatrabby78@gmail.com' && Password === '1234') {
        window.location.href="home.html";
    }
    else if (Email === '' || Password === ''){
        alert('Please input e-mail and password');
    }
    else{
        alert('Invalid e-mail and password');
    }

})
window.history.forward();
function noBack() {
    window.history.forward();
}