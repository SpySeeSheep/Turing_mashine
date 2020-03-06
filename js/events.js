document.getElementById("click").onclick = function eventTuring() {
    let count = getArrayOneSS(document.getElementById("in_count").value);


    let str = '<table border="1"><tr>';
    for (let i = 0; i < count.length * 2; i++) {
        str += "<td " + 'id="' + i + '"' + '>' + '&nbsp;λ&nbsp;' + '</td>';
    }
    str += "</tr></table>";

    let tree = document.querySelector(".table_good");
    tree.innerHTML = str;

    let str_settings = new Map([
        ["updateMT", "Обновить МТ"],
        ["step", "Сделать шаг"],
        ["setRules", "Задать правила"],
        ["myOptions", "Мой вариант Машины Тьюринга"]]);
    str = getSettings(str_settings);
    tree = document.querySelector('.settings');
    tree.innerHTML = str;
    // console.log( str ) ;

    //let rulesHTML = document.querySelector('.rules');
    //let rules = getRules();
    //rulesHTML.innerHTML = rules;
}

