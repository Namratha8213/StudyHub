<?php
require 'config.php';
if(isset($_POST["submit"])){
    $name=$_POST["name"];
    $username=$_POST["usernamename"];
    $email=$_POST["email"];
    $password=$_POST["password"];
    $confirmpassword =$_POST["comfirmpassword"];
    $duplicate = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username' OR email='$email'");
    if(mysqli_num_rows($duplicate)>0){
        echo "<script> alert('Username or Email Has Already Taken'); </script>";
    }
    else{
        if($password == $confirmpassword){
            $query = "INSERT INTO tb_user VALUES('','$name','$username','$email','$password')";
            mysqli_query($conn,$query);
            echo "<script> alert('Registration successful'); </script>";
        }
        else{
            echo "<script> alert('Password Doesn't match'); </script>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <h2>Registration</h2>
    <form action="" class="" method="post" autocomplete="off">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name"  required value="">
    <label for="username">Username:</label>
    <input type="text" name="usernamename" id="username"  required value="">
    <label for="email">Email:</label>
    <input type="email" name="email" id="email"  required value="">
    <label for="password">Password:</label>
    <input type="password" name="password" id="password"  required value="">
    <label for="comfirmpassword">Password:</label>
    <input type="password" name="comfirmpassword" id="comfirmpassword"  required value="">
    <button type="submit" name="submit">Registration</button>
    </form>
    <a href="login.php">Login</a>
</body>
</html>
