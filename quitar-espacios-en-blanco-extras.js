function echo(texto){
    console.log(texto);
}

function quitar_espacios(texto){
    if(texto!='' && texto != null){
        texto = texto.trim();
        texto = texto.replace(/\s\s+/g, ' ');
        texto = texto.replace(/\s\s/g, '');
    }else{
        echo('El String está vacío');
    }
    return texto;
}

quitar_espacios("   String     sfaf  nsf a<sfsf   a<sfsf");
quitar_espacios(" String         sfaf     nsf    a<sfsf      a<sfsf");
