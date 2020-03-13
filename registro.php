<?php include 'config.php';


	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
	 // name store into $name.
	$name = $obj['nombreU'];
	 
	// same with $email.
	$email = $obj['correo'];
	 
	// same with $password.
	$password = $obj['contraseña'];
	
	if($obj['correo']!="")
	{
	
	$result= $mysqli->query("SELECT * FROM registro where correo='$correo'");
	
	
		if($result->num_rows>0){
			echo json_encode('That email is already registered');  // alert msg in react native		 		
		}
		else
		{		
		   $add = $mysqli->query("insert into registro (nombreU,correo,contraseña) values('$nombreU','$correo','$contraseña')");
			
			if($add){
				echo  json_encode('User Successfully Registered'); // alert msg in react native
			}
			else{
			   echo json_encode('Check your internet connection'); // our query fail 		
			}
				
		}
	}
	
	else{
	  echo json_encode('Try again');
	}

	
?>