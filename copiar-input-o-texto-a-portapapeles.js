//Usa JQuery, si tu proyecto no lo usa descomenta el siguiente comentario
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

/*ESTE CÓDIGO USA EL ONCLICK DE LA SIGUIENTE MANERA*/
/*onclick="copiarTexto(this)"*/
/*onclick="copiarTextoConSaltoDeLinea(this)"*/

//Aquí un ejemplo de código html
//<button id="id-button" name="name-button" class="class-button" style="background: #f2f2f2;color:black;border: none;padding: 10px;border-radius: 5px;box-shadow: 0px 0px 3px #0044;" onclick="copiarTexto(this)" value="value-button">Botón</button>

//Es para testo simple sin salto de linea
function copiarTexto(objeto) {
    //Aquí establecemos qué datos usaremos, este esta pensado para un onclick cambia el this por '#id-del-objeto' para hacerlo dinámico
    let id     = $(objeto).attr('id');
    let texto  = $(objeto).text();
    let name   = $(objeto).attr('name');
    let value  = $(objeto).val();
    
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

//Es para texto con salto de linea
function copiarTextoConSaltoDeLinea(objeto) {
    //En caso de que uses un elemento que de por sí tiene saltos de línea como un parrafo o un textarea descomenta lo siguiente
    $(objeto).text(($(objeto).text().replace("<br>", "\n")));
    $(objeto).text(($(objeto).text().replace("/<br>", "\n")));
    $(objeto).val(($(objeto).val().replace("<br>", "\n")));
    $(objeto).val(($(objeto).val().replace("/<br>", "\n")));
   
    //Aquí establecemos qué datos usaremos, este esta pensado para un onclick cambia el this por '#id-del-objeto' para hacerlo dinámico
    let id     = $(objeto).attr('id');
    let texto  = $(objeto).text();
    let name   = $(objeto).attr('name');
    let value  = $(objeto).val();
    
    //Se establece lo que se va a copiar
    let valorCopiado = 'Id: '+id+'\nNombre: '+name+'\nValor: '+value;
    
    //Se establece lo que se va a copiar
    element = $('<textarea>').appendTo('body').val(valorCopiado).select();
    document.execCommand('copy');
    element.remove();
}
