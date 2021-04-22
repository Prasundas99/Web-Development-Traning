<?php
//connect to database
//mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
$conn = mysqli_connect('https://phpkeeper.herokuapp.com/', 'Prasun','', 'keeper');

// check connection
	if(!$conn){
		echo 'Connection error: '. mysqli_connect_error();
	}
?>
