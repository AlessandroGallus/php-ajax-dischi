
<?php
  include 'data.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../assets/style.css">
  <title>Dischi</title>
</head>
<body>
  <div class="wrapper-dischi">
    <?php 
      foreach($database as $data){
    ?>
    <div class="disco">

        <img src="<?php echo $data["poster"] ?>" alt="img disco">
        <h2><?php echo $data['title'] ?></h2>
        <p><?php echo $data['year'] ?></p>
    </div>
    <?php }?>
  </div>
  
</body>
</html>