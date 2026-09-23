<?php
header("content-Type: application/json");

$categorie =[
    ["id" => 1, "nom" => "Développement Web"],
    ["id" => 2, "nom" => "Design UI/UX"],
    ["id" => 3, "nom" => "Developpement mobile"],
    ["id" => 4, "nom" => "Backend"]
];

echo json_encode($categorie);