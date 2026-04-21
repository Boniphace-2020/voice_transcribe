<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>M-Pesa Payment System</title>

<style>
body {
    font-family: Arial, sans-serif;
    background: #f4f6f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.card {
    background: white;
    padding: 30px;
    width: 350px;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
}

h2 {
    text-align: center;
    color: #2e7d32;
    margin-bottom: 20px;
}

label {
    font-size: 14px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    margin: 8px 0 15px 0;
    border: 1px solid #ccc;
    border-radius: 6px;
}

button {
    width: 100%;
    padding: 12px;
    background: #2e7d32;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background: #1b5e20;
}

.note {
    font-size: 12px;
    text-align: center;
    color: gray;
    margin-top: 10px;
}
</style>

</head>

<body>

<div class="card">
    <!DOCTYPE html>
<html>
<head>
    <title>M-Pesa Payment System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <div class="card">
        <h2>💳 M-Pesa Payment</h2>

        <form method="POST" action="stkpush.php">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="2547XXXXXXXX" required>

            <label>Amount (KES)</label>
            <input type="number" name="amount" placeholder="Enter amount" required>

            <button type="submit">Pay Now</button>
        </form>

    </div>

</div>

</body>
</html>