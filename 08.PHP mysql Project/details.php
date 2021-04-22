<?php 

	include('config/db_connect.php');


//Delete from data
if(isset($_POST['Delete'])){

	$id_to_delete = mysqli_real_escape_string($conn , $_POST['id_to_delete']);

	$sql = "DELETE FROM `notes` WHERE Id = '$id_to_delete'";
	if(mysqli_query($conn , $sql)){
		//Success
		header('Location: index.php');
	}else{
		//failure
		echo 'query error: ' . mysqli_error($conn);
	}
}



	// check GET request id param
	if(isset($_GET['Id'])){
		
		// escape sql chars
		$id = mysqli_real_escape_string($conn, $_GET['Id']);

		// make sql
		$sql = "SELECT * FROM `notes` WHERE `Id` = '$id'";

		// get the query result
		$result = mysqli_query($conn, $sql);

		// fetch result in array format
		$notes = mysqli_fetch_assoc($result);

		mysqli_free_result($result);
		mysqli_close($conn);

	}

?>

<!DOCTYPE html>
<html>

	<?php include('templates/header.php'); ?>

	<div class="container center">
		<?php if($notes): ?>
			<h4><?php echo $notes['title']; ?></h4>
			<p><?php echo date($notes['created_at']); ?></p>
			<h5>Details:</h5>
			<p><?php echo $notes['desc']; ?></p>

			<!--Delete Form--->
			<form action="details.php" method="POST">
			<input type="hidden" name="id_to_delete" value="<?php $notes['Id'] ?>">
			<input type="submit" name="Delete" value="Delete" class="btn brand">
			</form>


		<?php else: ?>
			<h5>No such pizza exists.</h5>
		<?php endif ?>
	</div>

	<?php include('templates/footer.php'); ?>

</html>


