<?php

// $email and $message are the data that is being
// posted to this page from our html contact form
$name = $_POST['name'] ;
$email = $_POST['email'] ;
$message = $_POST['message'] ;
$number = $_POST['number'] ;

// When we unzipped PHPMailer, it unzipped to
// public_html/PHPMailer_5.2.0
require("phpmailer/PHPMailerAutoload.php");

$mail = new PHPMailer();

// set mailer to use SMTP
$mail->IsSMTP();

// As this email.php script lives on the same server as our email server
// we are setting the HOS $mail->Port = 465;T to localhost
$mail->Host = "smtp.gmail.com"; // specify main and backup server
 $mail->Port = 465;
$mail->SMTPAuth = true; // turn on SMTP authentication

// When sending email using PHPMailer, you need to send from a valid email address
// In this case, we setup a test email account with the following credentials:
// email: user@example.com
// pass: password
$mail->SMTPSecure = "ssl";
$mail->Username = "Email"; // SMTP username
$mail->Password = "Password"; // SMTP password

// $email is the user's email address the specified
// on our contact us page. We set this variable at
// the top of this page with:
// $email = $_REQUEST['email'] ;
$mail->From = $email;

// below we want to set the email address we will be sending our email to.
$mail->AddAddress("Email", "Name");



// set word wrap to 50 characters
//$mail->WordWrap = 50;
// set email format to HTML $mail->Port = 465; $mail->Por $mail->Port = 465;t = 465;
$mail->IsHTML(true);

$mail->Subject = "You have received feedback from your website!";

// $message is the user's message they typed in
// on our contact us page. We set this variable at
// the top of this page with:
// $message = $_REQUEST['message'] ;
//$mail->Body = $message;
$mail->Body = "<b>Name: \"".$name." <br> Email ID : ".$email." <br> Phone No- : ".$number." <br> Message: ".$message."\"</b>";
//$mail->AltBody ="Name    : {$name}\n\nEmail   : {$email}\n\nMessage : {$message}";

if(!$mail->Send())
{
echo "Message could not be sent. <p>";
echo "Mailer Error: " . $mail->ErrorInfo;
exit;
}

echo "Thank you for contacting us. We will be in touch with you very soon.";
?>