<?php
if((isset($_POST['date'])&&$_POST['time']!="")&&(isset($_POST['guests'])&&!="")) { 
$to = 'sir.ygorkagrishin@yandex.ru';
$subject = 'Резерв';
$message = '
  <html>
    <head>
      <title>'.$subject.'</title>
    </head>
    <body>
      <p>Дата: '.$_POST['date'].'</p>
      <p>Время: '.$_POST['time'].'</p>
      <p>Количество гостей: '.$_POST['guests'].'</p>                        
    </body>
  </html>';
  
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Отправитель <from@example.com>\r\n";

mail($to, $subject, $message, $headers);
}
?>