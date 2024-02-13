
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
 }

 
function criptografarMensagem(){


    let mensagem = document.querySelector('input').value;
    let  regexAcentos = /[áàâãéèêíïóôõöúçñ]/gi;
    if (regexAcentos.test(mensagem)){
        alert("Esta página não criptografa mensagens contendo caracteres especiais.");
    }else{
        let textoCriptografado = mensagem.toLowerCase()
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        let botaoCopiar = document.querySelector('.botaoCopiarTexto');
        let titulo = document.querySelector('.mensagemNaoLocalizada');
        let sessaoImagem = document.querySelector('.imagemDireita');
        let texto = document.querySelector('.digiteTexto')
        let retorno = document.querySelector('.retornoDireita')
        botaoCopiar.style.display = 'block';
        titulo.style.display= "none";
        sessaoImagem.style.display = "none";
        texto.style.fontSize = "2rem";
        retorno.style.justifyContent = 'space-between'
    exibirTextoNaTela('p', textoCriptografado);
    }
}



function decriptografarMensagem (){
    let textoOriginal = document.querySelector('p').innerText;
    let textoDescriptografado = textoOriginal.toLowerCase()
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    exibirTextoNaTela('p', textoDescriptografado);
    
}

function copiarTexto() {
    // Seleciona o elemento que contém o texto descriptografado
    let textoDescriptografado = document.querySelector('p').innerText;

    // Cria um elemento input para copiar o texto para a área de transferência
    let input = document.createElement('input');
    input.setAttribute('value', textoDescriptografado);
    document.body.appendChild(input);

    // Seleciona o texto dentro do input
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento input criado
    document.body.removeChild(input);

    // Avisa o usuário que o texto foi copiado
    alert('Texto copiado para a área de transferência!');
}
