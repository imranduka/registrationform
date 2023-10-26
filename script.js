function submitted() {
    // Get the registration form
    var registrationForm = document.querySelector('form');

    // Get the values of password and confirm password fields
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Get the error message element
    var errorMessage = document.getElementById("passwordError");

    // Check if the form is valid
    if (registrationForm.checkValidity() == true) {
        // Check if the passwords do not match
        if (password != confirmPassword) {
            errorMessage.style.display = 'block'; // Display the error message
            return false; // Prevent form submission
        }

        // Get the success message element
        var successMessage = document.getElementById("success-message");
        successMessage.style.display = 'block'; // Display the success message

        // Get the entire container and hide it
        var entireContainer = document.querySelector('.container');
        entireContainer.style.display = 'none';
    }
    else {
        return false; // Prevent form submission if the form is not valid
    }
}
