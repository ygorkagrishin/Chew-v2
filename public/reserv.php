<?php
if((isset($_POST['date'])&&$_POST['time']!="")&&(isset($_POST['guests'])&&!="")) { //Проверка отправилось ли наше поля name и не пустые ли они
$to = 'sir.ygorkagrishin@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Резерв'; //Загаловок сообщения
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
  </html>'; //Текст нащего сообщения можно использовать HTML теги
  
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Отправитель <from@example.com>\r\n";

mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>