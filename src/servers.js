const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Normally you'd check credentials here
    if (username === 'admin' && password === 'password') {
        res.redirect('/admin');
    } else {
        res.send('Invalid credentials');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
