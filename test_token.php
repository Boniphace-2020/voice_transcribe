<?php

$consumerKey = "YOUR_CONSUMER_KEY";
$consumerSecret = "YOUR_CONSUMER_SECRET";

$url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

// encode credentials
$credentials = base64_encode($consumerKey . ":" . $consumerSecret);

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Basic " . $credentials,
    "Content-Type: application/json"
]);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "HTTP CODE: " . $http . "<br>";
echo "RESPONSE: " . $response;
?>