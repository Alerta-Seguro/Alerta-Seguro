document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('frmMensagem');
    const modal1 = document.getElementById('envio-sucesso');
    const btnFechar1 = document.getElementById('fechar-modal1');

    function validar() {
        const email = document.getElementById("informeEmail");
        const mensagem = document.getElementById("mensagem");
        let valido = true;

        if (email.value.trim() === "") {
            document.getElementById("emailError").innerText = "O campo Informe o seu E-mail é de preenchimento obrigatório!";
            if (valido) email.focus();
            valido = false;
        }
        else {
            document.getElementById("emailError").innerText = "";
        }

        if (mensagem.value.trim() === "") {
            document.getElementById("emptyMessage").innerText = "Preencha o bloco com a mensagem que quer nos enviar";
            if(valido) mensagem.focus();
            valido = false;
        }
        else{
            document.getElementById("emptyMessage").innerText = "";
        }

        return valido;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // evita reload da página

        if (!validar()){
            return;
        }
        // mostra a modal
        modal1.style.display = 'flex';

        // limpa o formulário
        form.reset();
    });

    // fecha modal ao clicar no botão fechar
    btnFechar1.addEventListener('click', function () {
        modal1.style.display = 'none';
    });

    // fecha modal ao clicar fora da caixa de conteúdo
    window.addEventListener('click', function (event) {
        if (event.target === modal1) {
            modal1.style.display = 'none';
        }
    });
});