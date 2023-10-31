document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const passwordError = document.getElementById("passwordError");

    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            passwordError.style.display = "none";
        } else {
            passwordError.style.display = "block";
        }
    }

    // Add an input event listener to both password fields

    passwordInput.addEventListener("input", validatePassword);
    confirmPasswordInput.addEventListener("input", validatePassword);




    function handleFormSubmit() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const successMessage = document.getElementById("success-message");
        const entireContainer = document.querySelector('.container');
        const form = document.querySelector('form');

        // Check if all required fields are filled out and passwords match
        if (form.checkValidity() && password === confirmPassword) {
            successMessage.style.display = "block";
            entireContainer.style.display = "none"; // Hide the container on successful submission
        } else {
            event.preventDefault(); // Prevent form submission if requirements are not met
        }
    }

    // Add the event listener to the form
    document.querySelector('form').addEventListener("submit", handleFormSubmit);
});