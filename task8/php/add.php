<?php
require ("config.php");
$type = $_REQUEST['type'];
$score = $_REQUEST['score'];
$content = $_REQUEST['content'];
$sql = "INSERT INTO news (content, score, type) VALUES ('{$content}', '{$score}', '{$type}')";
$result = mysql_query($sql, $con);
if (!$result) {
	die('error:' . mysql_error());
} else {
	echo "success";
}
mysql_close($con);
?>