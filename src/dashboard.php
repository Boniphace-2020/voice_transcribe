<?php
session_start();

// Redirect to login if not logged in
if (!isset($_SESSION['admin'])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f9;
            margin: 0;
            padding: 0;
        }
        .header {
            background-color: #2c3e50;
            padding: 20px;
            color: white;
            text-align: center;
        }
        .container {
            padding: 30px;
        }
        .welcome {
            font-size: 20px;
            margin-bottom: 30px;
        }
        .card {
            background: #fff;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        a.button {
            display: inline-block;
            margin: 10px 10px 0 0;
            padding: 10px 15px;
            background-color: #3498db;
            color: white;
            border-radius: 6px;
            text-decoration: none;
        }
        a.button:hover {
            background-color: #2980b9;
        }
        .logout {
            float: right;
            margin-top: -40px;
            margin-right: 20px;
        }
    </style>
</head>
<body>

<div class="header">
    <h1>NGO Donation Tracking System</h1>
    <a href="logout.php" class="button logout">Logout</a>
</div>

<div class="container">
    <div class="welcome">Welcome, <strong><?php echo $_SESSION['admin']; ?></strong>!</div>

    <div class="card">
        <h3>Quick Access</h3>
        <a href="donors.php" class="button">Manage Donors</a>
        <a href="donations.php" class="button">View Donations</a>
        <a href="projects.php" class="button">Manage Projects</a>
        <a href="reports.php" class="button">Generate Reports</a>
    </div>
</div>

</body>
</html>
