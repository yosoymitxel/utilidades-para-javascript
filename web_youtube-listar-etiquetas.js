var script  = document.createElement('script');
script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var etiquetas = ''
$('div#chip-text').each(function( index ) {
  etiquetas += "'"+$( this ).text() + "', "
});
console.log(etiquetas)
