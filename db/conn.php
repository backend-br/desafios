<?php 
require 'vendor/autoload.php';

// Carrega método que carrega variáveis de ambiente
$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
$dotenv->load();

$db = pg_connect(getenv('DB_HOST'));

if ($db -> connect_error) {
    echo "Erro ao conectar ao MySQL: " . $db -> connect_error ."";
    exit(1);
}
?>