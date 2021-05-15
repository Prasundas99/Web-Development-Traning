<?php

include( 'config\db_connect.php ');



$title = $desc = '';
	$errors = array('title' => '', 'desc' => '');


if(isset($_POST['submit'])){
    		// check title
		if(empty($_POST['title'])){
			$errors['title'] = 'A title is required';
        } 

        //Checking is valid or not if yes move to index page
		if(array_filter($errors)){
			//echo 'errors in form';
		} else {
            //echo 'form is valid';
            
            $title = mysqli_real_escape_string($conn , $_POST['title']);
            $desc = mysqli_real_escape_string($conn , $_POST['desc']);

            //create sql
            $sql = "INSERT INTO `note` (`title`, `desc`) VALUES( '$title' , '$desc' )";

            // save to db and check
            if(mysqli_query($conn,$sql)){
                //success
                header('Location: index.php');
            } else{
                //error
                echo 'querrry error: ' . mysqli_error($conn);
            }

			
		}
		
}// end POST check

?>

<!DOCTYPE html>
<html lang="en">
<!--Header and navbar-->

<link rel="stylesheet" href="css\add.css">
<?php include('./templates/header.php'); ?>

<section class="continer grey-text">
    <h4 class="center">Add a note </h4>
    <form class="white" action="add.php" method="POST">
<br>
        <input type="text" name="title" value="<?php echo htmlspecialchars($title) ?>" placeholder="Title">
			<div class="red-text"><?php echo $errors['title']; ?></div>
        <br> 
        <input type="text" name="desc" id="" placeholder="Take a note" >
        <div class="center">
            <br>
            <input type="submit" value="Add" name="submit" class="btn brand z-depth-0 ">
        </div>
    </form>
</section>



<!--Footer-->
<?php include('./templates/footer.php'); ?>

</html>