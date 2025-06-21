document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Normally here you would send a request to the server for authentication
    if (username === 'admin' && password === 'password') {
        window.location.href = '/admin'; // Redirect to admin page
    } else {
        alert('Invalid credentials');
    }
});
