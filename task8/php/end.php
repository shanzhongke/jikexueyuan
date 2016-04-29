<?php
require ("config.php");
	$sql = "SELECT id, content, score, type FROM news WHERE 1";
	$result = mysql_query($sql, $con);
	if (!$result) {
		die('error:' . mysql_error());
	} else {
		$ret = array();
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
			$ret[] = $row;
		}
	}
	mysql_close($con);
	echo json_encode($ret);
	die;
?>