$.ajax({
    url: "test.html"
}).fail( function( jqXHR, textStatus, errorThrown ) {
    if (jqXHR.status === 0) {
        console.log('Sin conexión: Verifica tu conexión.');
    } else if (jqXHR.status == 404) {
        console.log('Página no encontrada Error [404]');
    } else if (jqXHR.status == 500) {
        console.log('Error interno del servidor Error [500].');
    } else if (textStatus === 'parsererror') {
        console.log('Solicitud JSON: Parse failed.');
    } else if (textStatus === 'timeout') {
        console.log('Time out error.');
    } else if (textStatus === 'abort') {
        console.log('Solicitud Ajax fue abortada.');
    } else {
        console.log('Error desconocido: ' + jqXHR.responseText);
    }
});
