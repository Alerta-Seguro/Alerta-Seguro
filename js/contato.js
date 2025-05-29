document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('frmMensagem');
    const modal1 = document.getElementById('envio-sucesso');
    const btnFechar1 = document.getElementById('fechar-modal1');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // evita reload da página

        // mostra a modal
        modal1.style.display = 'flex';

        // limpa o formulário
        form.reset();
    });

    // fecha modal ao clicar no botão fechar
    btnFechar1.addEventListener('click', function() {
        modal1.style.display = 'none';
    });

    // fecha modal ao clicar fora da caixa de conteúdo
    window.addEventListener('click', function(event) {
        if(event.target === modal1) {
            modal1.style.display = 'none';
        }
    });
});
