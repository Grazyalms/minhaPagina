let paragrafo = document.querySelector('#para2');

paragrafo.addEventListener('click',mostraMensagem);

function mostraMensagem(){
    paragrafo.innerHTML='Seja bem vindo a minha página!';
}