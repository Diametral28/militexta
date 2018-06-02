<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        echo $name = strip_tags(trim($_POST["name"]));
		echo $name = str_replace(array("\r","\n"),array(" "," "),$name);
        echo $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        echo $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! Un error ocurrio al momento de enviar el mensaje.";
            exit;
        }

        // Update this to your desired email address.
        $recipient = "drg_henri@hotmail.com";
        $subject = "Mensaje de $name";
        
        // Email content.
        $email_content = "Nombre: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Asunto: $subject\n\n";
        $email_content .= "Mensaje:\n$message\n";

        // Email headers.
        $email_headers = "De: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Gracias! tu mensaje ha sido enviado.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Algo ocurrio tu mensaje no pudo enviarse.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Hay un problema con el envio, intenta de nuevo.";
    }

?>