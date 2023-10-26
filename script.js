function submitted() {

    var registrationForm = document.querySelector('form')
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirm-password").value
    var errorMessage = document.getElementById("passwordError")

    if (registrationForm.checkValidity() == true) {

        if (password != confirmPassword) {
            errorMessage.style.display = 'block'
            return false
        }

        var successMessage = document.getElementById("success-message")
        successMessage.style.display = 'block'

        var entireContainer = document.querySelector('.container')
        entireContainer.style.display = 'none'

    }
    else {
        return false;
    }








}