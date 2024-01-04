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

$result = mysqli_query($con,"SELECT * from profile where email ='".$email."'
AND password ='".$password."'");

$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);

if($nums>=1){

    http_response_code(200);
    $outp = "";

        $outp .= '{"email":"' . $rs["email"] . '",';
        $outp .= '"Status": "200"}';  
        
        echo $outp;

}
else{
    http_response_code(202);
}

?>