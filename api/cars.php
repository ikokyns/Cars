<?php

header("Access-Control-Allow-Origin: *");

$cars = array(
    array(
    "id" => 1,
    "mark" => 'Mazda',
    "model" => '232 ',
    "year" => 1995,
    "maxSpeed" => 200,
    "isAutomatic" => false,
    "engine" => 2000,
    "numberOfDoors" => 4
    ),
    array(
    "id" => 2,
    "mark" => 'Kia',
    "model" => 'Ceed',
    "year" => 2001,
    "maxSpeed" => 250,
    "isAutomatic" => true,
    "engine" => 1900,
    "numberOfDoors" => 4
    ),
    array(
    "id" => 3,
    "mark" => 'Honda',
    "model" => 'Civic',
    "year" => 2014,
    "maxSpeed" => 300,
    "isAutomatic" => false,
    "engine" => 2000,
    "numberOfDoors" => 3
    ),
);

echo json_encode($cars);