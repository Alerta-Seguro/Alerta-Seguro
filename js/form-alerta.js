function validar(){
    nomeCompleto = document.getElementById("nomeCompleto");
    numTelefone = document.getElementById("numTelefone");
    email = document.getElementById("email");
    regiao = document.getElementById("regiao");

    if(nomeCompleto.value == ""){
        document.getElementById("erroNome").innerText = "O campo Nome completo é de prenchimento obrigatório!"
        nomeCompleto.focus();
        return false;
    }
    else{
        document.getElementById("erroNome").innerText = ""
    }

    if(numTelefone.value == ""){
        document.getElementById("erroTelefone").innerText = "O campo Número (Telefone) é de prenchimento obrigatório!"
        numTelefone.focus();
        return false;
    }
    else{
        document.getElementById("erroTelefone").innerText = ""
    }

    if(email.value == ""){
        document.getElementById("erroEmail").innerText = "O campo Email é de prenchimento obrigatório!"
        email.focus();
        return false;
    }
    else{
        document.getElementById("erroEmail").innerText = ""
    }
}