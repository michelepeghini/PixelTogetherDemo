<?php
//use \FileEditor;
include ('FileEditor.php');
require __DIR__ . '\vendor\autoload.php';

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new FileEditor()
        )
    ),
    8080
);

$server->run();