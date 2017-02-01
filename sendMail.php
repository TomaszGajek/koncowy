<?php

require './phpmailer/PHPMailerAutoload.php';
// username, email,  textarea
$username = $_REQUEST[ 'username' ];
$usermail = $_REQUEST[ 'email' ];
$message = "Nowa wiadomość z seriwsu<br/>--------------------------<br/>" . $_REQUEST[ 'textarea' ];

$mail = new PHPMailer;

// z jakiego konta wysylamy maile
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'kontodowysylaniamaili@gmail.com';
$mail->Password = 'abhyb7haabhyb7ha';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom($usermail, $username);
$mail->addAddress('kosmagajek@gmail.com', 'ja'); // na jaki adres wysylamy maila
$mail->addReplyTo($usermail, $username);
$mail->CharSet = "UTF-8";
$mail->isHTML(true);

$mail->Subject = 'Nowa wiadomość z formularza kontaktowego';
$mail->Body    = $message;

if(!$mail->send()) {
	echo json_encode( array( 'status' => 'error', 'message' => $mail->ErrorInfo ) );
} else {
    echo json_encode( array( 'status' => 'ok' ) );
}