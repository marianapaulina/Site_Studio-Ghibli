document.addEventListener('DOMContentLoaded', function() {
    const itens = document.querySelectorAll('.item');
    const marcadores = document.querySelectorAll('.marcador');
    const botaoVoltar = document.querySelector('.voltar');
    const botaoAvancar = document.querySelector('.avancar');
    const contador = document.querySelector('.contador');
    
    let indiceAtual = 0;
    const totalItens = itens.length;
    
    function atualizarCarrossel() {
        itens.forEach(item => item.classList.remove('ativo'));
        marcadores.forEach(marcador => marcador.classList.remove('ativo'));
        
        itens[indiceAtual].classList.add('ativo');
        marcadores[indiceAtual].classList.add('ativo');
        contador.textContent = `0${indiceAtual + 1}`;
    }
    
    function avancar() {
        indiceAtual = (indiceAtual + 1) % totalItens;
        atualizarCarrossel();
    }
    
    function voltar() {
        indiceAtual = (indiceAtual - 1 + totalItens) % totalItens;
        atualizarCarrossel();
    }
    
    botaoVoltar.addEventListener('click', avancar);
    botaoAvancar.addEventListener('click', voltar);
    
    marcadores.forEach(marcador => {
        marcador.addEventListener('click', function() {
            indiceAtual = parseInt(this.getAttribute('data-index'));
            atualizarCarrossel();
        });
    });
    
    atualizarCarrossel();
});