function echo(texto){
    console.log(texto);
}

function quitarEspacios(texto){
     if(texto!='' && texto != null){
         texto = texto.trim();
        texto = texto.replace('  ', '');
        echo(texto);
     }
}

quitarEspacios("   String     sfaf  nsf a<sfsf   a<sfsf");
quitarEspacios(" String         sfaf     nsf    a<sfsf      a<sfsf");
