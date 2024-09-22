<?php 

// if ($argc !== 2) {
//     echo "Erro: digite um comando válido.\n";
//     exit(1);
// }

$CMD = $argv[1];

if($CMD == "cadastrar") {
    echo "Insira seu token: \n";
    exit("Fim do script.");
};

if ($CMD == "consultar") {
    echo "Dados retornados: \n";
    exit("Fim do comando: {$CMD}");
};