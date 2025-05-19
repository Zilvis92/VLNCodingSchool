// 1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.
// reikia isvesti i html i sita elementa <div id="function"></div>

function introduce() {
    const name = 'Zilvinas';
    const reason = 'noriu tapti programuotoju, tai labai įdomu.';
    const output = `Mano vardas yra ${name} ir aš pasirinkau programavimą, nes ${reason}`;
    document.getElementById('function').innerHTML += `<p>${output}</p>`;
}

function toCallIntroduce() {
    for (let i = 0; i < 3; i++) {
        introduce();
    }
}
toCallIntroduce();
// --------------------------------------------------------

// 2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.
// reikia isvesti i html i sita elementa <div id="5time"></div>

function poem() {
    const lines = [
        "BALTUMAS",
        "Koks baltumas, neapsakomas baltumas!",
        "Kur dangus, kur žemė – neatskirsi.",
        "Krinta sniegas – baltas nerūpestingumas.",
        "Rodos, šūktelsi iš džiaugsmo ir numirsi.",
    ];
    const output = lines.join('<br>');
    document.getElementById('5time').innerHTML += `<p>${output}</p>`;
}

function toCallPoem() {
    for (let i = 0; i < 5; i++) {
        poem();
    }
}
toCallPoem();
// --------------------------------------------------------

// 3. Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite
// visas tris funkcijas po vieną kartą. Reikia isvesti i html i sita elementa <div id="threeFunctions"></div>

function firstFunction() {
    const output = 'Pirmas tekstas: Sveiki atvykę į mūsų svetainę!';
    document.getElementById('threeFunctions').innerHTML += `<p><strong>${output}</strong></p>`;
}

function secondFunction() {
    const output = 'Antras tekstas: Mūsų svetainėje rasite daug naudingos informacijos.';
    document.getElementById('threeFunctions').innerHTML += `<p><strong>${output}</strong></p>`;
}

function thirdFunction() {
    const output = 'Trečias tekstas: Ačiū, kad lankotės mūsų svetainėje!';
    document.getElementById('threeFunctions').innerHTML += `<p><strong>${output}</strong></p>`;
}
function toCallThreeFunctions() {
    firstFunction();
    secondFunction();
    thirdFunction();
}
toCallThreeFunctions();
// -------------------------------------------------------

// 4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutė, kitoje - kita.
// Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią
// trečiąją funkciją už visų funkcijų ribų. 

function firstText() {
    const output = 'Pirmas tekstas: tai yra pirmas tekstas.';
    document.getElementById('text').innerHTML += `<p><i>${output}</i></p>`;
}

function secondText() {
    const output = 'Antras tekstas: tai yra antras tekstas.';
    document.getElementById('text').innerHTML += `<p><i>${output}</i></p>`;
}

function callBothTexts() {
    firstText();
    secondText();
}
callBothTexts();