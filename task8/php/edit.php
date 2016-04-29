<?php
require ("config.php");
$id = $_REQUEST['id'];
$content = $_REQUEST['content'];
$sql = "UPDATE news SET content='" . addslashes($content) . "' WHERE id='{$id}'";
$result = mysql_query($sql, $con);
if (!$result) {
	die('error:' . mysql_error());
} else {
	echo "success";
}
mysql_close($con);
?>