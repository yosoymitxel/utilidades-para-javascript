//Usa jquery y solo debes mandarle el id de la tabla junto con una tabla que tiene su respectivo theader y tbody 

function exportHTMLTableCSV(idTable) {
    let html     = $('#'.idTable)
    let filename = idTable+'-'+((new Date).toLocaleDateString()).replaceAll('/','-')
    var data     = []
    var rows     = document.querySelectorAll("table tr")

    for (let i = 0, iMax = rows.length; i < iMax; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th")

        for (let j = 0, jMax = cols.length; j < jMax; j++) {
            row.push(cols[j].innerText)
        }

        data.push(row.join(";"))
    }

    let csv = data.join("\n")

    var csv_file, download_link;

    csv_file                    = new Blob([csv], {type: "text/csv"});
    download_link               = document.createElement("a");
    download_link.download      = filename;
    download_link.href          = window.URL.createObjectURL(csv_file);
    download_link.style.display = "none";

    document.body.appendChild(download_link);
    download_link.click();
}
