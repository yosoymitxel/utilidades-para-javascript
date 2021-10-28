#Usa jquery y solo debes mandarle el id de la tabla junto con una tabla que tiene su respectivo theader y tbody 

function exportHTMLTableXML(idTable) {
    let nombre = idTable+'-'+((new Date).toLocaleDateString()).replaceAll('/','-')
    let titulos = []
    $('#table-duplicados thead th').each(function(i,o) {
        titulos.push($(o).text())
    })

    let data   =
        `<?xml version="1.0" encoding="UTF-8"?>
 <productos>
        ${Array.from($(`#${idTable} tbody tr`))
            .map(
                producto => {
                    let resouesta = ''
                    let i = 0
                    resouesta += '  <producto>\n'

                    for (titulo of titulos) {
                        resouesta += `          <${titulo}>${producto.children[i].innerText}</${titulo}>\n`
                        i++
                    }

                    resouesta += '  </producto>\n'
                    return resouesta

                }
            )
            .join("")
        }
 </productos>`;
    const a = document.createElement("a");
    a.href  = URL.createObjectURL(new Blob([data], {
        type: "text/xml"
    }));
    a.setAttribute("download", nombre);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
