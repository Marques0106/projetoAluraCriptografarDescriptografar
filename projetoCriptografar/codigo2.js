
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 }

function criptografarMensagem(){
    let mensagem = document.querySelector('input').value;
    let textoCriptografado = mensagem.toLowerCase()
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    exibirTextoNaTela('p', textoCriptografado)
    document.getElementById('imagem').removeAttribute('disabled');

}

function decriptografarMensagem (textoCriptografado){
    let textoOriginal = textoCriptografado
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    return textoOriginal;
}


