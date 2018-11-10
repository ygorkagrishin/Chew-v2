<?php
if((isset($_POST['user-name'])&&$_POST['user-email']!="")&&(isset($_POST['user-message'])&&!="")) { //Проверка отправилось ли наше поля name и не пустые ли они
$to = 'sir.ygorkagrishin@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Сообщение от пользователя'; //Загаловок сообщения
$message = '
  <html>
    <head>
      <title>'.$subject.'</title>
    </head>
    <body>
      <p>Имя: '.$_POST['user-name'].'</p>
      <p>От кого: '.$_POST['user-email'].'</p>
      <p>Сообщение: '.$_POST['user-message'].'</p>                        
    </body>
  </html>'; //Текст нащего сообщения можно использовать HTML теги
  
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Отправитель <from@example.com>\r\n";

mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>