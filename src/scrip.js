document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated simple authentication
        const validUsername = 'admin';
        const validPassword = 'admin123';

        // Check if credentials are correct
        if (username === validUsername && password === validPassword) {
            // Redirect to dashboard page after successful login
            window.location.href = 'dashboard.html'; // Change to the page you want to redirect to
        } else {
            // Display error message if credentials are invalid
            errorMessage.style.display = 'block';
        }
    });
});
