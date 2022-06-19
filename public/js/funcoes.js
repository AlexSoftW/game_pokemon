// sessão
function validarSessao() {
    var id = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (id != null && nome != null) {
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = id;
        }
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}


