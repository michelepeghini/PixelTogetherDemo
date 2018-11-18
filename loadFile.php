<?php
session_start();

$response = array();

$response['user'] = $_SESSION['user'];
$response['fileName'] = "textFile.txt";
$response['fileContent'] = file_get_contents($response['fileName']);

echo( json_encode($response));

