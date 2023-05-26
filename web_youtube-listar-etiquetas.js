var etiquetas = ''
$('div#chip-text').each(function( index ) {
  etiquetas += "'"+$( this ).text() + "', "
});
console.log(etiquetas)
