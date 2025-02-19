//Projetos

//Home

const home = document.getElementById("home");

home.addEventListener("click", () => {

    window.location.href = "index.html";

    

})

//Registro

const registro = document.getElementById("conectar");

registro.addEventListener("click", () => {

    window.location.href = "conectar.html";

})

//Pesquisas

const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("click", () => {

    window.location.href = "pesquisas.html";

})

//Logar

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("f-login");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "/pesquisador.html";
        });
    }
});

//Cadastro planta

//Cadastro árvore

//Cadastro projeto
