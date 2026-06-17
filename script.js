function validarLogin() {

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const feedback = document.getElementById("feedback");

    feedback.innerText = "";
    feedback.style.color = "red";

    if (!email.includes("@")) {
        feedback.innerText = "E-mail inválido.";
        return false;
    }

    if (senha.length < 8) {
        feedback.innerText = "Senha deve ter no mínimo 8 caracteres.";
        return false;
    }


    feedback.style.color = "green";
    feedback.innerText = "Login realizado com sucesso!";

    setTimeout(() => {
        window.location.href = "inscricao.html";
    }, 1000);

    return false;
}