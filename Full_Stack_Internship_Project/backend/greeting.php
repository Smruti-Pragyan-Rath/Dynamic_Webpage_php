<?php
date_default_timezone_set('Asia/Kolkata'); // Set timezone to IST
$hour = date("H");

if ($hour >= 5 && $hour < 12) {
    $greeting = "Good Morning!";
} elseif ($hour >= 12 && $hour < 17) {
    $greeting = "Good Afternoon!";
} elseif ($hour >= 17 && $hour < 21) {
    $greeting = "Good Evening!";
} else {
    $greeting = "Good Night!";
}

echo $greeting;
?>
