<?php
session_start();

// Check if the user is authenticated (logged in)
if (!isset($_SESSION["username"])) {
    header("Location: login.php"); // Redirect to the login page if not authenticated
    exit();
}

// Get the authenticated user's username
$username = $_SESSION["username"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <!-- Your CSS and JavaScript files, if any -->
</head>
<body>
    <!-- Header or navigation, if any -->
    <!-- ... -->

    <div class="container">
        <h1>Welcome, <?php echo $username; ?>!</h1>
        <p>This is your dashboard. You can customize this page to display user-specific content and features.</p>
        <a href="logout.php">Logout</a> <!-- Provide a link to log out -->
    </div>

    <!-- Footer, if any -->
    <!-- ... -->
</body>
</html>

