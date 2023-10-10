
function validatePassword() {
    
}

function showForgotPasswordForm() {
    var loginForm = document.querySelector('.login-container form');
    var forgotPasswordForm = document.getElementById('forgot-password-form');

    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'block';
}

function sendResetLink() {
    alert("Reset link sent successfully!");  
    return false;  
}
