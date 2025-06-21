document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Example of validation (you can integrate backend authentication here)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (username && password && role) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';  // Redirect to dashboard based on role
    } else {
        alert('Please fill all fields');
    }
});
