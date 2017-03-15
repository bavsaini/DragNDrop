<?php
//fetching vaues from URL
$userid = $_POST['userid'];
$password = $_POST['password'];
$vpassword = $_POST['vpassword'];
$email = $_POST['email_add'];
$vemail = $_POST['vemail_add'];
$securityques = $_POST['securityques'];
$security2 = $_POST['security2'];
$mob = $_POST['mob'];
$address = $_POST['address'];
$interests = $_POST['interests'];

$connection = mysql_connect("localhost", "root","");
$db = mysql_select_db("cmpe280", $connection);

if (isset($_POST['userid'])) {
	$query = mysql_query("INSERT INTO registration(userid, password, vpassword, email, vemail, securityques, security2, mob, address, interests) VALUES ('$userid', '$password', $vpassword', '$email', '$vemail', '$securityques', '$security2','$mob', $address', '$interests')"); //Insert Query
	echo "Form Submitted succesfully";
}

else 
{
	echo "Insertion Failed";

}
mysql_close($connection);
?>