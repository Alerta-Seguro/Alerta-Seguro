document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('alarme');
    const modal = document.getElementById('cdt-sucesso');
    const btnFechar = document.getElementById('fechar-modal');

    function validar() {
        const nomeCompleto = document.getElementById("nomeCompleto");
        const numTelefone = document.getElementById("numTelefone");
        const email = document.getElementById("email");
        const regiaoSelect = document.getElementById("regiao");
        const regiaoSelecionada = regiaoSelect.value;
        let valido = true;

        if (nomeCompleto.value.trim() === "") {
            document.getElementById("erroNome").innerText = "O preenchimento do campo Nome Completo é obrigatório!";
            if(valido) nomeCompleto.focus();
            valido = false;
        }
        else {
            document.getElementById("erroNome").innerText = "";
        }

        if (numTelefone.value.trim() === "") {
            document.getElementById("erroTelefone").innerText = "O preenchimento do campo Telefone é obrigatório!";
            if (valido) numTelefone.focus(); // foca só se ainda não focou outro
            valido = false;
        }
        else {
            document.getElementById("erroTelefone").innerText = "";
        }

        if (email.value.trim() === "") {
            document.getElementById("erroEmail").innerText = "O preenchimento do campo E-mail é obrigatório!";
            if (valido) email.focus();
            valido = false;
        }
        else {
            document.getElementById("erroEmail").innerText = "";
        }

        if (regiaoSelecionada === "") {
            document.getElementById("erroRegiao").innerText = "A seleção da Região é obrigatória!";
            if (valido) regiaoSelect.focus();
            valido = false;
        } 
        else {
            document.getElementById("erroRegiao").innerText = "";
        }

        return valido;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // evita o reload da página

        if (!validar()) {
            return; // se não passou na validação, não mostra modal nem limpa
        }

        // se passou na validação, mostra a modal
        modal.style.display = 'flex';

        // limpa o formulário
        form.reset();
    });

    // fecha modal ao clicar no botão fechar
    btnFechar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // fecha modal ao clicar fora do conteúdo da modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});