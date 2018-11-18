<?php
session_start();

if (file_put_contents($_POST['fileName'],$_POST['fileContent']))
{
    echo json_encode($_POST);
} else {
    die("File save error!");    
}
