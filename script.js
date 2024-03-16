const textArea = document.getElementById("textArea");
const mensagem = document.getElementById("mensagem");
const aviso1 = document.getElementById("aviso1");
const aviso2 = document.getElementById("aviso2");
const botao3 = document.querySelector(".visual__texto-criptografado__botoes");


// Criptografia:
// "e" => "enter"
// "i" => "imes"
// "a" => "ai"
// "o" => "ober"
// "u" => "ufat"



function btnCriptografar() {
    if (textArea.value != "") {
        const textoCriptografadoFinal = criptografar(textArea.value);
        mensagem.value = textoCriptografadoFinal;
        textArea.value = "";
        aviso1.innerHTML = "";
        aviso2.innerHTML = "";
        document.getElementById("divbtn3").style.marginTop= "14%"; 
        document.getElementById("btn3").style.visibility="visible";
        document.getElementById("img-lupa").style.visibility="hidden";
        document.getElementById("mensagem").style.height="30%";

        
    } else {
        alert ("Digite a mensagem que deseja criptografar.");
    }

}

function criptografar (textoCriptografado) {

    let matrizDecodificacao = [["e" ,"enter"] , ["i" ,"imes"] ,["a" ,"ai"] ,["o" ,"ober"] ,["u" ,"ufat"] ];
    textoCriptografado = textoCriptografado.toLowerCase();

    for (let i = 0; i < matrizDecodificacao.length; i++) {

        // if(textoCriptografado.incudes(matrizDecodificacao[i][0])) {
            textoCriptografado = textoCriptografado.replaceAll(matrizDecodificacao[i][0], matrizDecodificacao[i][1]);
        // }
    }
    
    return textoCriptografado;

}

function btnDescriptografar() {
    if (textArea.value != "") {
        const textoDescriptografadoFinal = descriptografar(textArea.value);
        mensagem.value = textoDescriptografadoFinal;
        textArea.value = "";
        aviso1.innerHTML = "";
        aviso2.innerHTML = "";
        document.getElementById("divbtn3").style.marginTop= "14%"; 
        document.getElementById("btn3").style.visibility="visible";
        document.getElementById("div-texto-img").style.visibility="visible";
    } else {
        alert ("Digite ou cole a mensagem que deseja descriptografar.")
    }
}

function descriptografar (textoDescriptografado) {

    let matrizDecodificacao = [["e" ,"enter"] , ["i" ,"imes"] ,["a" ,"ai"] ,["o" ,"ober"] ,["u" ,"ufat"] ];
    textoDescriptografado = textoDescriptografado.toLowerCase();

    for (let i = 0; i < matrizDecodificacao.length; i++) {

        // if(textoCriptografado.incudes(matrizDecodificacao[i][1])) {
            textoDescriptografado = textoDescriptografado.replaceAll(matrizDecodificacao[i][1], matrizDecodificacao[i][0]);
        // }
    }
    
    return textoDescriptografado;
}

function btnCopiar() {
   if (mensagem.value != "") {
    let msgCopiar = mensagem;
        msgCopiar.select();
        msgCopiar.setSelectionRange(0, 99999)
        document.execCommand("copy");
        mensagem.value = "";
        alert ("Sua mensagem foi copiada para area de transferencia. Use CTRL + V para colar.");
        window.location.reload();
   } else {
    alert ("Não há mensagem para copiar.");
   }
             
}