<?php
session_start();

require __DIR__ . '/vendor/autoload.php';

if (file_put_contents($_POST['fileName'],$_POST['fileContent']))
{
    echo json_encode($_POST);
} else {
    die("File save error!");    
}
