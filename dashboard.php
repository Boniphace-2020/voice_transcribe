<?php
include("config.php");

$result = $conn->query("SELECT * FROM payments ORDER BY id DESC");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <div class="card" style="width:90%;">
        <h2>📊 Payment Dashboard</h2>

        <table>
            <tr>
                <th>ID</th>
                <th>Phone</th>
                <th>Amount</th>
                <th>Receipt</th>
                <th>Status</th>
                <th>Date</th>
            </tr>

            <?php while($row = $result->fetch_assoc()) { ?>
            <tr>
                <td><?= $row['id'] ?></td>
                <td><?= $row['phone'] ?></td>
                <td><?= $row['amount'] ?></td>
                <td><?= $row['receipt'] ?></td>
                <td><?= $row['status'] ?></td>
                <td><?= $row['created_at'] ?></td>
            </tr>
            <?php } ?>

        </table>
    </div>

</div>

</body>
</html>