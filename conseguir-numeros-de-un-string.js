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
