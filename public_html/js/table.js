document.querySelector("#alimentar").addEventListener('click', createAll(22,10));

function createAll(qtde_all_rows, qtde_for_page) {
    
    var pages = Math.ceil(qtde_all_rows / qtde_for_page);
    createPages(pages);
    for (var i = 0; i < pages; i++) {
        createTable(i);
    }
    appendRows(qtde_all_rows, qtde_for_page);
    
}

function createTable(id_page) {

    var table = document.createElement("table");
    table.setAttribute("id", "table-list-personagens");

    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tr = document.createElement("tr");

    var th_personagem = document.createElement("th");
    th_personagem.setAttribute("id", "th-personagem");
    th_personagem.innerHTML = 'Personagens';

    var th_series = document.createElement("th");
    th_series.setAttribute("id", "th-series");
    th_series.innerHTML = 'Séries';

    var th_eventos = document.createElement("th");
    th_eventos.setAttribute("id", "th-eventos");
    th_eventos.innerHTML = 'Eventos';

    tr.appendChild(th_personagem);
    tr.appendChild(th_series);
    tr.appendChild(th_eventos);

    thead.appendChild(tr);

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody-div-child-" + id_page);
    table.appendChild(tbody);

    var div_child = document.querySelector("#div-child-" + id_page);
    div_child.appendChild(table);

}

function appendRows(qtde, qtde_for_page) {

    for (var i = 0; i < qtde; i++) {

        var page = Math.ceil((i + 1) / qtde_for_page) - 1;
        var tr = document.createElement("tr");
        var tbody = document.querySelector("#tbody-div-child-" + page);
        tbody.appendChild(tr);

        var td1 = document.createElement("td");
        td1.innerHTML = i;
        var td2 = document.createElement("td");
        td2.innerHTML = i;
        var td3 = document.createElement("td");
        td3.innerHTML = i;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    }
}

function createPages(qtde_pages) {
    var div_list = document.getElementById("div-list");
    for (var i = 0; i < qtde_pages; i++) {
        var el = document.createElement("div");
        el.setAttribute("id", "div-child-" + i);
        div_list.appendChild(el);
    }
}