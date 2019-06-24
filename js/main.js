// Вызов функций при старте страницы
$("#table").append(generate(50, 50));
$("td").attr("data-x", Array)
$("td").text(getRandomInt);
// Обьявление функций
function generate(rows, cols) {
    let gn = "<table>";
    for (row = 1; row <= rows; row++) {
        gn += "<tr>";
        for (col = 1; col <= cols; col++) {
            gn += "<td></td>";
        }
        gn += "</tr>";
    }
    return gn;
}

[Array(2500).keys()];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * 3) + 1;
}

let v1 = 1;
let v2 = 50;
let v3 = 49;
let v4 = 51;

$(document).on('click', 'td', function(event) {
    let value = $(this).text();
    if (value == 1) {
        $(this).css('background-color', 'green');
        let b = ($(this).attr('data-x'))
        let f = b.replace(/[\s.,%]/g, '');
        let b1 = f - v1;
        let b2 = f - v2;
        let b3 = f - v4;
        let b4 = f - v3;
        let b5 = parseInt(f) + parseInt(v3);
        let b6 = parseInt(f) + parseInt(v4);
        let b7 = parseInt(f) + parseInt(v2);
        let b8 = parseInt(f) + parseInt(v1);
        $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b2 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b3 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b4 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b5 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b6 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b7 + "," + '"]').css('background-color', 'green');
        $("td[data-x=" + '"' + b8 + "," + '"]').css('background-color', 'green');

    } else {
        if (value == 2) {
            $(this).css('background-color', 'blue');
            let b = ($(this).attr('data-x'))
            let f = b.replace(/[\s.,%]/g, '');
            let b1 = f - v1;
            let b2 = f - v2;
            let b3 = f - v4;
            let b4 = f - v3;
            let b5 = parseInt(f) + parseInt(v3);
            let b6 = parseInt(f) + parseInt(v4);
            let b7 = parseInt(f) + parseInt(v2);
            let b8 = parseInt(f) + parseInt(v1);
            $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b2 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b3 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b4 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b5 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b6 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b7 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b8 + "," + '"]').css('background-color', 'blue');
        } else {
            if (value == 3) {
                $(this).css('background-color', 'red');
                let b = ($(this).attr('data-x'))
                let f = b.replace(/[\s.,%]/g, '');
                let b1 = f - v1;
                let b2 = f - v2;
                let b3 = f - v4;
                let b4 = f - v3;
                let b5 = parseInt(f) + parseInt(v3);
                let b6 = parseInt(f) + parseInt(v4);
                let b7 = parseInt(f) + parseInt(v2);
                let b8 = parseInt(f) + parseInt(v1);
                $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b2 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b3 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b4 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b5 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b6 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b7 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b8 + "," + '"]').css('background-color', 'red');
            }
        }
    }
});
