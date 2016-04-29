<?php
require ("config.php");
$id = $_REQUEST['id'];
$sql = "DELETE FROM `news` WHERE id='{$id}'";
$result = mysql_query($sql, $con);
if (!$result) {
	die('error:' . mysql_error());
} else {
	echo "success";
}
mysql_close($con);
?>