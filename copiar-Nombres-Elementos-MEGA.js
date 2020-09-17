/*Al ejecutar la función hace un listado de los archivos que están dentro de una carpeta de mega
Ejemplo:

https://mega.nz/folder/yzIwgAia#2ndz9h15k3WgAjnLMH1nbg

1. Introducción al curso
2. Introducción al Hacking Ético
3. Despliegue del laboratorio de pruebas
4. Manejo de Kali Linux
5. Anonimato en Internet
6. Identificación y explotación de vulnerabilidades en sistemas
7. Identificación y explotación de vulnerabilidades en aplicaciones web
8. Identificación y explotación de vulnerabilidades en redes
9. Identificación y explotación de vulnerabilidades en redes Wi-Fi
10. Ingeniería Social
11. Pautas para la realización de ejercicios Red Team


*/

function copiarNombresElementosMEGA(){
    var texto = '';

    $('.tranfer-filetype-txt').map(function(index,obj){
        console.log($(obj).text())
        texto += ( $(obj).text() )+'\n'
    })
    let $temp  = $("<textarea>")
    $("body").append($temp)
    $temp.val(texto).select()
    let success = (document.execCommand("copy"))
    $temp.remove()
    return success
}
