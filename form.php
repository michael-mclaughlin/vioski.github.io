<?php
// Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get the form fields and remove whitespace.

        $name = strip_tags(trim($_POST["name"]));
			$name = str_replace(array("\r","\n"),array(" "," "),$name);
	    $companyName = strip_tags(trim($_POST["company"]));
    		$name = str_replace(array("\r","\n"),array(" "," "),$companyName);

        $phone = preg_replace('/[^0-9]/', '', $_POST['phone']);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        $subject = strip_tags(trim($_POST["subject"]));

        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if (empty($name) OR empty($subject) empty($companyName) OR empty($phone) OR !filter_var($email, FILTER_VALIDATE_EMAIL))  {
            http_response_code(400);
            echo "Oops! Please provide all the information for better service";
            exit;
        }

        $recipient = "info@vioski.com";

        $subject = "$subject";

        // Build the email content.
        $email_content = "My name is $name.\n";
        $email_content = "My Company is named $name.\n";
        $email_content ="I would like to talk to you about $subject.\n";
        $email_content = "My phone number is $phone.\n\n";
        $email_content = "My email is $email.\n\n";
        $email_content = "$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Thanks! We'll talk soon.";
        } else {
            http_response_code(500);
            echo "Stupid server! Try Again.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Oops! Please Try Again.";
    }
?>

