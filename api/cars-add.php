<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$data = json_decode(file_get_contents('php://input'), true);

echo json_encode(array(
    "id" => 10,
    "mark" => $data['mark'],
    "model" => $data['model'],
    "year" => $data['year'],
    "maxSpeed" => $data['maxSpeed'],
    "isAutomatic" => $data['isAutomatic'],
    "engine" => $data['engine'],
    "numberOfDoors" => $data['numberOfDoors']
  ));