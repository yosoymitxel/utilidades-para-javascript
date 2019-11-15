//Funcion para imprimir más sencillo
function echo(texto){
    console.log(texto);
}

//Se buscan los números
function conseguirNumeroString(texto){
  let numero =  texto.match(/\d+/g);
  
  //Se valida si es es un array, hay caso (como el segundo) donde no sale un número directamente sino un array
  numero = Array.isArray(numero)?numero.join(''):numero;
  return numero;
}

//Ejemplo
let textoConNumeros0  = "111";
let textoConNumeros1  = "Aquí hay 1 número, eso si no contamos el 2do y el 3ro";
let numero;

numero = conseguirNumeroString(textoConNumeros0);
echo('El numero es: ('+numero+')');
numero = conseguirNumeroString(textoConNumeros1);
echo('El numero es: ('+numero+')');


//BONUS, mostrar con unidades de mil ejemplo 10000 = 10.000
function number_format(user_input){
        user_input = user_input.toString();
        var filtered_number = user_input.replace(/[^0-9]/gi, '');
        var length = filtered_number.length;
        var breakpoint = 1;
        var formated_number = '';

        for(i = 1; i <= length; i++){
            if(breakpoint > 3){
                breakpoint = 1;
                formated_number = '.' + formated_number;
            }
            var next_letter = i + 1;
            formated_number = filtered_number.substring(length - i, length - (i - 1)) + formated_number;

            breakpoint++;
        }

        return formated_number;
    }
echo(number_format(numero));

//BONUS 2 convertir a entero
function entero(numero){
    return parseInt(numero);
}
echo(entero(numero));
