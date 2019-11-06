//Usa JQuery, si tu proyecto no lo usa descomenta el siguiente comentario
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

function copiarTexto() {
    //Aquí establecemos qué datos usaremos, este esta pensado para un onclick cambia el this por '#id-del-objeto' para hacerlo dinámico
    let id     = $(this).attr('id');
    let texto  = $(this).text();
    let name   = $(this).attr('name');
    let value  = $(this).val();
    
    //Se establece lo que se va a copiar
    let valorCopiado = id+' '+name+' '+value;
    
    //Se realiza el copiado
    let aux = document.createElement("input");
    aux.setAttribute("value", valorCopiado);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
