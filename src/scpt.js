// Show the Registration form and hide Login form
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}

// Show the Login form and hide Registration form
function showLogin() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Store the user data in localStorage (for demo purposes)
    const user = { username: username, password: password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful!');
    showLogin();  // Show the login form after registration
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        // Check if the entered username and password match the stored data
        if (loginUsername === storedUser.username && loginPassword === storedUser.password) {
            alert('Login successful!');
            showDashboard();  // Show the dashboard after successful login
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('No user found. Please register first.');
    }
});

// Show dashboard with the bar graph after successful login
function showDashboard() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // Create the bar graph
    const ctx = document.getElementById('studentPerformanceChart').getContext('2d');
    const studentPerformanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Science', 'English', 'History', 'Art'],  // Subjects
            datasets: [{
                label: 'Student Performance',
                data: [85, 92, 78, 88, 95],  // Scores for each subject
                backgroundColor: 'rgba(54, 162, 235, 0.6)',  // Bar color
                borderColor: 'rgba(54, 162, 235, 1)',  // Border color
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Log out function
function logOut() {
    localStorage.removeItem('user');  // Remove stored user data
    alert('Logged out successfully');
    document.getElementById('dashboard').style.display = 'none';
    showLogin();  // Show login form after logging out
}
