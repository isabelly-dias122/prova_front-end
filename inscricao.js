document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formInscricao");
    const msgErro = document.getElementById("mensagemErro");

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        msgErro.innerText = "";
        msgErro.style.color = "red";

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        let valido = true;

        if (!email.includes("@")) {
            msgErro.innerText = "E-mail deve conter '@'.";
            valido = false;
        }

        else if (senha.length < 8) {
            msgErro.innerText = "Senha deve ter no mínimo 8 caracteres.";
            valido = false;
        }

        else if (senha !== confirmarSenha) {
            msgErro.innerText = "As senhas não coincidem.";
            valido = false;
        }

        if (valido) {
            msgErro.style.color = "green";
            msgErro.innerText = "Inscrição salva com sucesso!";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1200);
        }

    });

});