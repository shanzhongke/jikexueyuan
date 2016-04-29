<?php
require ("config.php");
$newstype = $_REQUEST['type'];
switch($newstype) {
	case 'img' :
		$sql = "SELECT content, score, src FROM news WHERE 1";
		break;
	case 'tra' :
		$sql = "SELECT content, title, src,time FROM travel WHERE 1";
		break;
}
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
die ;
?>