//Logar

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("f-login");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            const url = "https://srfirew.github.io/sistemas-para-internet/1º Período/botanica-site/pesquisador.html";
            window.location.href = encodeURI(url);
        });
    }
});
