//But in case there is a chance of connecting with some other databases then PDO (PHP Data Objects) will be the right approach
//code snippet
<?php
$servername = "localhost"; //SERVER name
$username = "username"; //User name
$password = "password"; //Password
try 
{
  $connection = new PDO("mysql:host=$servername;dbname=myDB", $username, $password); //Here the DataBase is mentioned along with DataBase name 
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} 
catch(PDOException $e) //Catching Exeption
{
  echo "Connection failed: " . $e->getMessage();
}
$connection = null; //Closing the connection with DataBase
?>