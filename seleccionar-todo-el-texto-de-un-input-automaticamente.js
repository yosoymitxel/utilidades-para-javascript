//Usa JQuery, si tu proyecto no lo usa descomenta el siguiente comentario
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

//La función se ejecuta con un onclick u onfocus
function selectAll() {
    $("input[type=text]").focus(
        function() {
            this.select();
        }
    )
}

//Se ejecuta de forma automática
$( document ).ready(function() {
  $("input[type=text]").focus(
        function() {
            this.select();
        }
    )
});
