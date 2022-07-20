//Genera una lista de los archivos dentro de una carpeta en Mega.nz

function megaListarArchivos(){
    var lista = ''
    $('.tranfer-filetype-txt').map(function(index,obj){
        lista += $(obj).text() + '\n'
    })
    console.log(lista)
}

megaListarArchivos()
