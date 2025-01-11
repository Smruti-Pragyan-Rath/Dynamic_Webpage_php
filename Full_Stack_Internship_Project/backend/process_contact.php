<?php
include('config.php'); // Include your database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // Simple validation
    if (empty($email)) {
        echo "Email is required!";
        exit;
    }

    // Insert email into the subscribers table
    $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    // Optionally, send a confirmation email
    $subject = "Newsletter Subscription Confirmation";
    $message = "Thank you for subscribing to our newsletter!";
    $headers = "From: no-reply@yourwebsite.com";
    mail($email, $subject, $message, $headers);

    echo "Thank you for subscribing to our newsletter!";
}
?>
