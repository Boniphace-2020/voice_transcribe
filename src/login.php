<?php
session_start();

// Database connection
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "donation_tracking";

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$username = $_POST['username'];
$password = $_POST['password'];

// Fetch admin from database
$sql = "SELECT * FROM admins WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// Check if admin exists
if ($result->num_rows === 1) {
    $admin = $result->fetch_assoc();

    // Verify hashed password
    if (password_verify($password, $admin['password'])) {
        $_SESSION['admin'] = $admin['username'];
        header("Location: dashboard.php"); // redirect to dashboard
        exit();
    } else {
        echo "<script>alert('Invalid password'); window.location.href='login.html';</script>";
    }
} else {
    echo "<script>alert('Admin not found'); window.location.href='login.html';</script>";
}

$stmt->close();
$conn->close();
?>
