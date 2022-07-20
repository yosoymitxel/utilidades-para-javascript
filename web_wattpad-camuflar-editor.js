//Sirve para quitar el logo y cambiar el color de botones para disimular que no es la página

function wattpadCamuflarEditor(){
  $('.navbar-story-metadata.dropdown').remove()
  $('button.btn.btn-text.btn-works-item-details.on-works-item-details').remove()
  $('#story-settings').remove()
  $('.btn-orange').attr('style','background:#05a')
  $('#writer-editor').attr('style','padding:20px')
  $('title').text('Scope for Scriptcase')
}
