//Un selector multiple de elementos, en este caso, todos los elementos con id inicial guardar- como guardar-todo guardar-123
var buttons = '';
$('[id^=guardar-]').each(function( index, elemento ) {
  console.log( index + ": " + $(elemento).attr('id') );
  buttons += $(elemento).attr('id');
});
