//If it is known that the database will be MySQL only then mysqli extension is the appropriate one to do so.
//code snippet
<?php
$servername="localhost"; //SERVER name
$username="username"; //User name
$password="password"; //Password
$connection=mysqli_connect($servername,$username,$password); //Connecting with the DataBase
if(!$connection) //Checking the connection status
die("Statement ".mysqli_connect_error());
else echo"Connection successfully established";
mysqli_close($connection); //Closing the connection with database
?>