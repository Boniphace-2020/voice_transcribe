<?php

$consumerKey = "YOUR_CONSUMER_KEY";
$consumerSecret = "YOUR_CONSUMER_SECRET";

$shortCode = "174379"; // sandbox paybill
$passkey = "YOUR_PASSKEY";

$callbackURL = "https://YOUR_NGROK_URL/callback.php";

$conn = new mysqli("localhost", "root", "", "mpesa");

if ($conn->connect_error) {
    die("DB Connection failed");
}
?>