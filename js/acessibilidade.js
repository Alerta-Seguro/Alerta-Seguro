document.addEventListener("DOMContentLoaded", function () {
  const aumentarBtn = document.getElementById("aumentarFonte");
  const diminuirBtn = document.getElementById("diminuirFonte");
  const conteudo = document.getElementById("fundo");
  let fontSize = 16; // tamanho inicial em pixels

  // Função para aplicar o font-size a todos os elementos filhos do conteudo
  function aplicarFontSize(tamanho) {
    // Seleciona todos os elementos filhos que podem ter texto
    const elementos = conteudo.querySelectorAll('p');
    elementos.forEach(el => {
      el.style.fontSize = tamanho + "px";
    });
    conteudo.style.fontSize = tamanho + "px";
  }

  // Aplica o tamanho inicial
  aplicarFontSize(fontSize);

  aumentarBtn.addEventListener("click", () => {
    if (fontSize < 30) {
      fontSize += 2;
      aplicarFontSize(fontSize);
    }
  });

  diminuirBtn.addEventListener("click", () => {
    if (fontSize > 10) {
      fontSize -= 2;
      aplicarFontSize(fontSize);
    }
  });
});
