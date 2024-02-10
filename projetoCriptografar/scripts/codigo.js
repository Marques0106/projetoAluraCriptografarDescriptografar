var cifra = {
    " ": "0",
    "a": "d",
    "b": "e",
    "c": "f",
    "d": "g",
    "e": "h",
    "f": "i",
    "g": "j",
    "h": "k",
    "i": "l",
    "j": "m",
    "k": "n",
    "l": "o",
    "m": "p",
    "n": "q",
    "o": "r",
    "p": "s",
    "q": "t",
    "r": "u",
    "s": "v",
    "t": "w",
    "u": "x",
    "v": "y",
    "w": "z",
    "x": "a",
    "y": "b",
    "z": "c"
};
  
var cifraCesarDecriptografar = {
  "0":" ",
  "d": "a",
  "e": "b",
  "f": "c",
  "g": "d",
  "h": "e",
  "i": "f",
  "j": "g",
  "k": "h",
  "l": "i",
  "m": "j",
  "n": "k",
  "o": "l",
  "p": "m",
  "q": "n",
  "r": "o",
  "s": "p",
  "t": "q",
  "u": "r",
  "v": "s",
  "w": "t",
  "x": "u",
  "y": "v",
  "z": "w",
  "a": "x",
  "b": "y",
  "c": "z"
};


function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}



function criptografarMensagem () {
  let textoOriginal = document.querySelector('input').value;
  let arrayLetras = textoOriginal.split(/(?!$)/u);
  let mensagemCriptografada = "";

  for(var i = 0; i< arrayLetras.length; i++){
    let letra = arrayLetras[i].toLowerCase();
    let letraCriptografada1 = cifra[letra];
    if(letraCriptografada1 !== undefined){
      mensagemCriptografada = mensagemCriptografada+letraCriptografada1;
    }else{
      mensagemCriptografada += arrayLetras[i];
    }
  }
  
  exibirTextoNaTela('p', mensagemCriptografada)
}


function decriptografarMensagem (){
  let textoCriptografado = document.querySelector('p').innerText;
  let arrayLetrasCriptografadas = textoCriptografado.split(/(?!$)/u);
  let mensagemOriginal = "";
  for(var i = 0; i< arrayLetrasCriptografadas.length; i++){
    let letraCriptografada = arrayLetrasCriptografadas[i];
    let letraOriginal = cifraCesarDecriptografar[letraCriptografada];

    if(letraOriginal !== undefined){
      mensagemOriginal = mensagemOriginal+letraOriginal;
    }else{
      mensagemOriginal += arrayLetrasCriptografadas[i];
    }
  }
  exibirTextoNaTela('p', mensagemOriginal)
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