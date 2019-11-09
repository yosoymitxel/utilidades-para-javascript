function echo(texto){
    console.log(texto);
}

function var_dump(dato) {
    let tipoDato = typeof dato;
    let valorDato = dato;
    switch (tipoDato) {
        case 'number':
            if (valorDato % 1 == 0) {
                tipoDato = 'int';
            } else {
                tipoDato = 'float';
            }
            echo(tipoDato + '(' + valorDato + ')');
            break;
        case 'string':
            echo(tipoDato + '(' + valorDato.length + ') "' + valorDato + '"');
            break;
        case 'object':
            if (Array.isArray(valorDato)) {
                tipoDato = 'array';
                echo(tipoDato + '(' + valorDato.length + ') "' + valorDato + '"');
            }else if(valorDato == null){
                echo('NULL');
            }else{
                echo('Objeto no reconocido.')
            }
            break;
        case 'boolean':
            echo(tipoDato + ' "' + valorDato + '"');
            break;
        case 'undefined':
            echo('La variable no está definida. (undefined)');
            break;
    }
}
