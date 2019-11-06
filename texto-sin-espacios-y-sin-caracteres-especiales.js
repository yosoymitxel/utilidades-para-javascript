function validarCaracteres(texto){
    //Aquí añades las letras que no quieres que se usen
    let vocalesNoPermitidas    = ['á','é','í','ó','ú'];
    
    //Aquí añades las letras que quieres que se usen
    let vocalesPermitidas      = ['a','e','i','o','u'];
    
    //Aquí añades los caracteres que no quieres que se usen
    let caracteresNoPermitidos = ['?','\"','\''];

    texto = (texto.toString()).toLowerCase();
    for(let i=0; i<vocalesNoPermitidas.length;i++){
        texto = texto.replace(vocalesNoPermitidas[i], vocalesPermitidas[i]);
    }
    
    for(let i=0; i<caracteresNoPermitidos.length;i++){
        texto = texto.replace(caracteresNoPermitidos[i], '_');
    }
    
    //Esta parte reemplaza los espacios en blanco " " y los guiones "-" por guiones bajos "_"
    texto = texto.replace(" - ", "");
    texto = texto.replace(/\s/g,"_");
    texto = texto.replace(/\W/g,'');

    return texto;
}
