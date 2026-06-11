let letrasDescobertas = [];
let letrasUsadas = [];
let tentativas = 6;

for (let i = 0; i < palavraSecreta.length; i++) {
    letrasDescobertas.push("_");
}

atualizarTela();

function atualizarTela() {
    document.getElementById("palavra").innerHTML =
        letrasDescobertas.join(" ");

    document.getElementById("tentativas").innerText = tentativas;

    document.getElementById("letras-usadas").innerHTML =
        "Letras utilizadas: " + letrasUsadas.join(", ");
}

function tentarLetra() {
    const input = document.getElementById("letra");
    const letra = input.value.toLowerCase();

    input.value = "";
    input.focus();

    if (letra === "") {
        return;
    }

    if (letrasUsadas.includes(letra)) {
        alert("Você já utilizou essa letra.");
        return;
    }

    letrasUsadas.push(letra);

    let acertou = false;

    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
            letrasDescobertas[i] = letra;
            acertou = true;
        }
    }

    if (!acertou) {
        tentativas--;
    }

    atualizarTela();

    verificarFim();
}

function verificarFim() {
    if (!letrasDescobertas.includes("_")) {
        document.getElementById("mensagem").innerHTML =
            "🎉 Parabéns! Você venceu!<br>Palavra: " + palavraSecreta;

        desabilitarJogo();
    }

    if (tentativas <= 0) {
        document.getElementById("mensagem").innerHTML =
            "💀 Você perdeu!<br>A palavra era: " + palavraSecreta;

        desabilitarJogo();
    }
}

function desabilitarJogo() {
    document.getElementById("letra").disabled = true;
}