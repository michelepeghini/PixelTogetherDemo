<?php
// "login" user
session_start();
$_SESSION['user'] = $_GET['user'];

header("location: edit.html");