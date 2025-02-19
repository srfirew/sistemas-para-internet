//Logar

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("f-login");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "pesquisador.html";
        });
    }
});
