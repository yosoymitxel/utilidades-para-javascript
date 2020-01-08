function dev_contador_texto_para_pruebas(texto='Prueba') {
    if( typeof dev_contador_texto_para_pruebas.counter == 'undefined' ) {
        dev_contador_texto_para_pruebas.counter = 0;
    }
    dev_contador_texto_para_pruebas.counter++;
    console.log(texto+': '+dev_contador_texto_para_pruebas.counter);
}

console.log(dev_contador_texto_para_pruebas('Entró'));
console.log(dev_contador_texto_para_pruebas('Calculó'));
console.log(dev_contador_texto_para_pruebas('Entró'));

//Entró: 1
//Calculó: 2
//Entró: 3
