//Logar

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("f-login");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "https://srfirew.github.io/sistemas-para-internet/1%C2%BA%20Per%C3%ADodo/botanica-site/pesquisador.html";
        });
    }
});
