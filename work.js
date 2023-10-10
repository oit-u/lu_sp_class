
function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordValidation = document.getElementById("password-validation");

    // Reset the innerHTML
    passwordValidation.innerHTML = "";

    // Check for special characters
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passwordValidation.innerHTML += "Password must contain at least one special character. ";
    }

    // Check for numbers
    if (!/\d/.test(password)) {
        passwordValidation.innerHTML += "Password must contain at least one number. ";
    }

    // Check for uppercase and lowercase characters
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        passwordValidation.innerHTML += "Password must contain both uppercase and lowercase characters. ";
    }

    // If there are no issues, return true for form submission
    return passwordValidation.innerHTML === "";
}
