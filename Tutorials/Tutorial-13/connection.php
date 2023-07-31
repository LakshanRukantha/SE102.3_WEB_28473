<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_name";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (mysqli_connect_errno()) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connection successful!";
}
?>
