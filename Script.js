let entradaTexto =document.getElementById("entradaTexto1");
let codificar=document.getElementById("botaocodifica");
let descodifica=document.getElementById("botaodescodifica");
let  resultado=document.getElementById("saida");
let botaoCopia=document.getElementById("copiar");
function criptografa(){
   let textoCriptografado=entradaTexto.value;
   //nova alteração 
   let removeAcentos=textoCriptografado.normalize("NFD");
   
   //
   let resultadoTexto=removeAcentos.replaceAll(/e/gi,"enter").replaceAll(/i/gi,"imes").replaceAll(/a/gi,"ai").replaceAll(/o/gi,"ober").replaceAll(/u/gi,"ufat");
     resultado.value=resultadoTexto;
}
function descriptografa(){
  let textoCriptografado=resultado.value;
  let descriptografado=textoCriptografado.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
  resultado.value=descriptografado;
}

function copiaTexto() {
  textoCopiado=resultado;
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("texto copiado com Sucesso! ");
  
}
codificar.onclick=criptografa;
descodifica.onclick=descriptografa;
botaoCopia.onclick=copiaTexto;