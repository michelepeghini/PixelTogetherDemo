<?php
session_start();

require __DIR__ . '/vendor/autoload.php';

$response = array();

$response['user'] = $_SESSION['user'];
$response['fileName'] = "textFile.txt";
$response['fileContent'] = file_get_contents($response['fileName']);

echo( json_encode($response));

