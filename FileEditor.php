<?php
//namespace FileEditor;
require __DIR__ . '\vendor\autoload.php';
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class FileEditor implements MessageComponentInterface {
    private $users = array();

    public function __construct() {
        $this->users = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) {
        // Store the new connection to send messages to later
        $this->users->attach($conn);
    }
    
    public function onMessage(ConnectionInterface $from, $msg) {
        foreach ($this->users as $user) {
            $user->send($msg);
            //if ($from !== $user) {
            //    $user->send($msg);
            //}
        }
    }

    public function onClose(ConnectionInterface $conn) {
        // The connection is closed, remove it, as we can no longer send it messages
        $this->users->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        trigger_error("An error has occurred: {$e->getMessage()}\n", E_USER_WARNING);
        $conn->close();
    }
}