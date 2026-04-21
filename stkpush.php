<?php
include 'config.php';

$phone = preg_replace('/^0/', '254', $_POST['phone']);
$amount = intval($_POST['amount']);

# ================= TOKEN =================
$credentials = base64_encode($consumerKey . ":" . $consumerSecret);

$ch = curl_init("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials");

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Basic " . $credentials
]);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

// 🔥 SHOW REAL CURL ERROR IF ANY
if (curl_errno($ch)) {
    die("CURL ERROR: " . curl_error($ch));
}

$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

echo "<pre>";
echo "HTTP CODE: " . $http_code . "\n";
echo "RAW RESPONSE: " . $response . "\n";
echo "</pre>";

$result = json_decode($response);

if (!isset($result->access_token)) {
    die("TOKEN FAILED. CHECK CREDENTIALS ABOVE.");
}

$access_token = $result->access_token;
# ================= STK PUSH =================
$timestamp = date("YmdHis");
$password = base64_encode($shortCode . $passkey . $timestamp);

$data = [
    "BusinessShortCode" => $shortCode,
    "Password" => $password,
    "Timestamp" => $timestamp,
    "TransactionType" => "CustomerPayBillOnline",
    "Amount" => $amount,
    "PartyA" => $phone,
    "PartyB" => $shortCode,
    "PhoneNumber" => $phone,
    "CallBackURL" => $callbackURL,
    "AccountReference" => "BarakaApp",
    "TransactionDesc" => "Payment"
];

$ch = curl_init("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . $access_token,
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

file_put_contents("logs.txt", $response.PHP_EOL, FILE_APPEND);

echo "<pre>$response</pre>";
?>