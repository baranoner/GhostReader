<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");




$data = json_decode(file_get_contents("php://input"));


$email = $data->email;
$password = $data->password;

$con = mysqli_connect("localhost:3306","root","");
mysqli_select_db($con, "ghostreader");

$sql = "insert into profile(
    email,
    password
)
values(
    '$email',
    '$password'
)";
$result = mysqli_query($con,$sql);

if($result){

    $response['data']=array(
        'status' => 'valid'
    );
    echo json_encode($response);
}
else{
    $response['data']=array(
        'status' => 'invalid'
    );
    echo json_encode($response);
}
?>