<?php
  $to      = 'comunicacao@queimadasfitascoimbra.pt';
  $subject = 'Participação Concurso Queima das Fitas 2018';
  $message = 'Resposta: ' . $_POST["artist"] . ", Email: " . $_POST["email"];
  $headers = 'From: comunicacao@queimadasfitascoimbra.pt' . "\r\n" .
      'Reply-To: comunicacao@queimadasfitascoimbra.pt' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  header('Location: index.html');
  exit();
?>
