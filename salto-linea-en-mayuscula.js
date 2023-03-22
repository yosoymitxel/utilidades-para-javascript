function dev_str_salto_linea_en_mayuscula(t){
    console.log((t).replace(/([A-Z])/g, `\n`+"$1"))
}

dev_str_salto_linea_en_mayuscula(`
Una vez llegado a esta instancia No sé si puedo hacer algo más Me siento perdido en mi propio laberinto Sin saber para qué estoy aquí 
`);
