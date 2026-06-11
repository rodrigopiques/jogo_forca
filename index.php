<?php
$palavras = [
    "computador",
    "internet",
    "programacao",
    "javascript",
    "php",
    "servidor",
    "banco",
    "tecnologia",
    "sistema",
    "desenvolvimento"
];

$palavra = $palavras[array_rand($palavras)];
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Jogo da Forca</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>🎮 Jogo da Forca</h1>

    <div id="forca">
        Tentativas restantes: <span id="tentativas">6</span>
    </div>

    <div id="palavra"></div>

    <input
        type="text"
        id="letra"
        maxlength="1"
        placeholder="Digite uma letra"
    >

    <button onclick="tentarLetra()">Tentar</button>

    <div id="letras-usadas"></div>

    <div id="mensagem"></div>
</div>

<script>
    const palavraSecreta = "<?php echo $palavra; ?>";
</script>

<script src="script.js"></script>

</body>
</html>