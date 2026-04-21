<?php
$conn = new mysqli("localhost", "root", "", "mpesa");

if ($conn->connect_error) {
    die("DB Error: " . $conn->connect_error);
}
?>