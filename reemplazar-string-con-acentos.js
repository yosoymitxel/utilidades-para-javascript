function reemplazar_string_con_acentos(texto){
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
    
   
