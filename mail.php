<?php
	$msg_box = ""; // в этой переменной будем хранить сообщения формы
	$errors = array(); // контейнер для ошибок
	// проверяем корректность полей
	// если форма без ошибок
	if(empty($errors)){		
		// собираем данные из формы
		$message  = "В коворкинг: " . $_POST['coworking_to'] . "<br/>";
		$message .= "Резидент коворкинга: " . $_POST['coworking_from'] . "<br/>";
		$message .= "Телефон: " . $_POST['phone'] . "<br/>";
		$message .= "email: " . $_POST['email'] . "<br/>";
		$message .= "Дата приезда: " . $_POST['from_date'] . "<br/>";
		$message .= "Дата выезда: " . $_POST['to_date'] . "<br/>";
		send_mail($message); // отправим письмо
		send_mail_re();// отправим автоответ
		// выведем сообщение об успехе
		$msg_box = '<span style="color: #fff;">Сообщение успешно отправлено!</span>';
	}else{
		// если были ошибки, то выводим их
		$msg_box = "";
		foreach($errors as $one_error){
			$msg_box .= "<span style='color: #ff6b6b;'>$one_error</span><br/>";
		}
	}
	// делаем ответ на клиентскую часть в формате JSON
	echo json_encode(array(
		'result' => $msg_box
	));
	// функция отправки письма
	function send_mail($message){
		// почта, на которую придет письмо
		$mail_to = "anastasi.smch@gmail.com"; // slabelschool@gmail.com
		// тема письма
		$subject = "Заголовок";
		// заголовок письма
		$headers= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
		// отправляем письмо 
		mail($mail_to, $subject, $message, $headers);
	}
	function send_mail_re(){
		// почта, на которую придет письмо
		$mail_to_re = $_POST['email']; 
		// тема письма
		$subject_re = "Заголовок 2";
		// заголовок письма
		$headers_re= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
		$headers_re .= "From: отправитель \r\n";
		// отправляем письмо 
		$message_re = "Form was succesful.<br></br>
lallalala <br></br>

lalalalala:<br></br>

По вопросам обращайтесь:</br>
lallalalala
";
		mail($mail_to_re, $subject_re, $message_re, $headers_re);
	}