<?php
// Database connection settings
// // http://localhost/EVENT/Register.html
//http://localhost/phpmyadmin/
$host = "localhost";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password for XAMPP
$database = "gfg_event"; // Your database name

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$college = $_POST['college'];
$department = $_POST['department'];
$year = $_POST['year'];
$rbt = $_POST['rbt'];
$language = $_POST['language'];

// SQL query to insert data into the table
$sql = "INSERT INTO registrations (name, email, contact, college, department, year, rbt, language)
        VALUES ('$name', '$email', '$contact', '$college', '$department', '$year', '$rbt', '$language')";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
