<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keeper</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="css\add.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>
            <?php
            date_default_timezone_set('Asia/Kolkata'); //Set the timezone based on your location / Users location.
            $date = date('d-m-y'); //Set current date 
            $time = date('h:i:s'); //Set current time
            ?>
<body class="grey lighten-4">
    <nav>
        <div class="nav-wrapper">
            <a href="index.php" class="brand-logo left"> Keeper </a>
            <a href="" class="brand-logo center hide-on-med-and-down">Date <?php echo"$date"?> Time <?php echo"$time"?></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="add.php" class="btn brand"> Add a Note </a></li>
            </ul>
        </div>
    </nav>