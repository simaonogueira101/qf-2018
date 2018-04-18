<?php
  $to      = 'simao.nogueira66@gmail.com';
  $subject = 'Participação Concurso Queima das Fitas 2018';
  $message = 'Resposta: ' . $_POST["artist"] . ", Email: " . $_POST["email"];
  $headers = 'From: concurso@queimadasfitascoimbra.com' . "\r\n" .
      'Reply-To: concurso@queimadasfitascoimbra.com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  header('Location: /');
  exit();
?>
