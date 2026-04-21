<?php
include 'config.php';

$stkCallback = file_get_contents('php://input');
$data = json_decode($stkCallback);

$result = $data->Body->stkCallback;

if ($result->ResultCode == 0) {

    $amount = $result->CallbackMetadata->Item[0]->Value;
    $phone = $result->CallbackMetadata->Item[4]->Value;
    $receipt = $result->CallbackMetadata->Item[1]->Value;

    $stmt = $conn->prepare("INSERT INTO payments (phone, amount, mpesa_receipt, status) VALUES (?, ?, ?, 'paid')");
    $stmt->bind_param("sis", $phone, $amount, $receipt);
    $stmt->execute();
}
include('config.php');

// Get M-Pesa response
$mpesaResponse = file_get_contents('php://input');
$data = json_decode($mpesaResponse, true);

// Extract result
$resultCode = $data['Body']['stkCallback']['ResultCode'];

if ($resultCode == 0) {

    $metadata = $data['Body']['stkCallback']['CallbackMetadata']['Item'];

    $amount = $metadata[0]['Value'];
    $receipt = $metadata[1]['Value'];
    $phone = $metadata[4]['Value'];

    // Save to database
    $stmt = $conn->prepare("INSERT INTO payments (phone, amount, receipt, status) VALUES (?, ?, ?, ?)");
    $status = "Success";
    $stmt->bind_param("sdss", $phone, $amount, $receipt, $status);
    $stmt->execute();

} else {
    // Failed payment
    $status = "Failed";
}
?>
?>