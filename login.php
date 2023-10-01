<?php
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define your user credentials (in a real application, these would be stored securely in a database)
    $valid_username = "your_valid_username";
    $valid_password = "your_valid_password";

    // Get user input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate user credentials
    if ($username === $valid_username && $password === $valid_password) {
        // Authentication successful
        $_SESSION["username"] = $username; // Store user information in a session
        echo json_encode(["success" => true]); // Return a JSON success response
        exit();
    } else {
        // Authentication failed
        echo json_encode(["success" => false]); // Return a JSON error response
        exit();
    }
}
?>
