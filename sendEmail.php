<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


$data = [];


if (isset($_POST['email'])) {
    $para = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
    $para = filter_var($para, FILTER_VALIDATE_EMAIL);
}

if (isset($_POST['name'])) {
    $name = $_POST['name'];
}

if (isset($_POST['comments'])) {
    $comment = htmlspecialchars($_POST['comments']);
    $comment = $comment.'<br>Nombre es: '.$name;
}

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("info@devmarcoestrada.com", "Marco Estrada");
$email->setSubject("Mensaje Visitante - " . $name);
$email->addTo($para, "Visitante");
$email->addTo("info@devmarcoestrada.com", "Marco Estrada");
$email->addContent(
    "text/html", $comment);

$sendgrid = new \SendGrid('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');
try {



    $response = $sendgrid->send($email);

    $data = array(
        'status' => 'Felicitaciones',
        'message' => 'Tu Mensaje ha sido enviado correctamente. Gracias por contactarte conmigo.');

    

} catch (Exception $e) {
    
    $data = array(
        'status' => 'Error',
        'message' => 'Tu mensaje no ha sido enviado. ' . $e->getMessage()
    );

}

/*
if (isset($_POST['name'])) {
    $name = $_POST['name'];
}


if (isset($_POST['email'])) {
    $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
}


if (isset($_POST['comments'])) {
    $comment = htmlspecialchars($_POST['comments']);
    $comments = $comment.'<br>Nombre es: '.$name;
}

$mail_key = 'fericell2909@gmail.com';   

require 'vendor/autoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = gethostbyname('smtp.gmail.com');  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = $mail_key;                 // SMTP username
$mail->Password = 'amenstefano2015';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom($mail_key, 'Marco Estrada');
$mail->addAddress($email, 'visitante');     // Add a recipient
$mail->addAddress('info@devmarcoestrada.com', 'visitante');

$mail->isHTML(true);                                  // Set email format to HTML

$comment = htmlspecialchars($_POST['comments']);
$comments = $comment.'<br>Nombre is: '.$name/*.'<br>Phone number is: '.$phone;

$mail->Subject = 'Pagina devmarcoestrada';
$mail->Body    = $comments;

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

if(!$mail->send()) {

    $data = array(
        'status' => 'Error',
        'message' => 'Tu mensaje no ha sido enviado. ' . $mail->ErrorInfo
    );
} else {
    $data = array(
        'status' => 'Congratulation',
        'message' => 'Tu Mensaje ha sido enviado correctamente. Gracias por contactarte conmigo.'
    );
}   

*/
echo json_encode($data);