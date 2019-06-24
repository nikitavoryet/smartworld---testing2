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

let d1 = 2;
let d2 = 52;
let d3 = 100;
let d4 = 101;
let d5 = 102;
let d6 = 99;
let d7 = 98;
let d8 = 48;

let g1 = 150;
let g2 = 151;
let g3 = 152;
let g4 = 153;
let g5 = 149;
let g6 = 148;
let g7 = 147;
let g8 = 3;
let g9 = 53;
let g10 = 103;
let g11 = 47;
let g12 = 97;

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
            let b1 = f - d1;
            let b2 = parseInt(f) + parseInt(d1);
            let b3 = f - d2;
            let b4 = parseInt(f) + parseInt(d2);
            let b5 = f - d3;
            let b6 = parseInt(f) + parseInt(d3);
            let b7 = f - d4;
            let b8 = parseInt(f) + parseInt(d4);
            let b9 = f - d5;
            let b10 = parseInt(f) + parseInt(d5);
            let b11 = f - d6;
            let b12 = parseInt(f) + parseInt(d6);
            let b13 = f - d7;
            let b14 = parseInt(f) + parseInt(d7);
            let b15 = f - d8;
            let b16 = parseInt(f) + parseInt(d8);
            //let b5 = parseInt(f) + parseInt(d3);
            $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b2 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b3 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b4 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b5 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b6 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b7 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b8 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b9 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b10 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b11 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b12 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b13 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b14 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b15 + "," + '"]').css('background-color', 'blue');
            $("td[data-x=" + '"' + b16 + "," + '"]').css('background-color', 'blue');
        } else {
            if (value == 3) {
                $(this).css('background-color', 'red');
                let b = ($(this).attr('data-x'))
                let f = b.replace(/[\s.,%]/g, '');
                let b1 = f - g1;
                let b2 = parseInt(f) + parseInt(g1);
                let b3 = f - g2;
                let b4 = parseInt(f) + parseInt(g2);
                let b5 = f - g3;
                let b6 = parseInt(f) + parseInt(g3);
                let b7 = f - g4;
                let b8 = parseInt(f) + parseInt(g4);
                let b9 = f - g5;
                let b10 = parseInt(f) + parseInt(g5);
                let b11 = f - g6;
                let b12 = parseInt(f) + parseInt(g6);
                let b13 = f - g7;
                let b14 = parseInt(f) + parseInt(g7);
                let b15 = f - g8;
                let b16 = parseInt(f) + parseInt(g8);
                let b17 = f - g9;
                let b18 = parseInt(f) + parseInt(g9);
                let b19 = f - g10;
                let b20 = parseInt(f) + parseInt(g10);
                let b21 = f - g11;
                let b22 = parseInt(f) + parseInt(g11);
                let b23 = f - g12;
                let b24 = parseInt(f) + parseInt(g12);
                $("td[data-x=" + '"' + b1 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b2 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b3 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b4 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b5 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b6 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b7 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b8 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b9 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b10 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b11 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b12 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b13 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b14 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b15 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b16 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b17 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b18 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b19 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b20 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b21 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b22 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b23 + "," + '"]').css('background-color', 'red');
                $("td[data-x=" + '"' + b24 + "," + '"]').css('background-color', 'red');

            }
        }
    }
});
