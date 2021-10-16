<?php
    header('Access-Control-Allow-Origin: *');
    header("Content-type: application/json");
    $NOMBRE = (array) [
        "Nombres" => (string) "Miguel Angel",
        "Apellidos" => (string) "Castro Escamilla",
        "Edad" => (integer) 23,
        "Dirrecion" => (string) "Calle 11",
        "Tipo sanguinio" => (string) "O+"
    ];
    echo <<<PLANTILLA
${!${''}= json_encode($NOMBRE, JSON_PRETTY_PRINT)}
PLANTILLA;

?>