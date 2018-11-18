<?php
session_start();

$result = array();

$result['user'] = $_SESSION['user'];
$result['fileName'] = "textFile.txt";
$result['fileContent'] = file_get_contents($result['fileName']);

echo( json_encode($result));

