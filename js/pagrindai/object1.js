// 7. Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
// turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
// raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
// reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).

let knygynas = {
    pavadinimas: 'Knygynas',
    adresas: 'Vilniaus g. 1',
    plotas: 100, // kv. m.
    kiekKnygu: 5000,
    darboValandos: '9:00 - 18:00',
    arAtidarytas: true
};

// Generuojame HTML visoms savybėms
let knygynoHTML = '<div class="knygynas-info">';
knygynoHTML += '<h2>' + knygynas.pavadinimas + '</h2>';
knygynoHTML += '<ul class="sarasas">';

for (const [raktas, reiksme] of Object.entries(knygynas)) {
    knygynoHTML += '<li>';
    knygynoHTML += '<strong>' + raktas + ':</strong> ';

    if (typeof reiksme !== 'string') {
        knygynoHTML += '<span class="ne-string">' + reiksme + ' (' + typeof reiksme + ')</span>';
    } else {
        knygynoHTML += reiksme;
    }
    knygynoHTML += '</li>';
}

knygynoHTML += '</ul>';
knygynoHTML += '</div>';
document.getElementById('knygynas').innerHTML = knygynoHTML;

// 8. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose
// objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų
// programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių
// vidurkius. Su generuoti HTML abiejų studentų informaciją, bei pažymių vidurkius.
// Raskite ir su generuokite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.

let studentas1 = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    studijuPrograma: 'Informatika',
    pazymiai: [8, 9, 10, 7, 8]
};
let studentas2 = {
    vardas: 'Ona',
    pavarde: 'Onaite',
    studijuPrograma: 'Matematika',
    pazymiai: [9, 10, 8, 9, 10]
};
let studentai = [studentas1, studentas2];
let studentaiHTML = '';
studentaiHTML += '<h2>Studentai</h2>';
studentaiHTML += '<ul class="sarasas">';

for (let studentas of studentai) {
    studentaiHTML += '<li>';
    studentaiHTML += '<strong>' + studentas.vardas + ' ' + studentas.pavarde + '</strong>';
    studentaiHTML += '<ul class="pazymiai">';

    let suma = 0;
    for (let pazymys of studentas.pazymiai) {
        suma += pazymys;
        studentaiHTML += '<li>' + pazymys + '</li>';
    }
    let vidurkis = suma / studentas.pazymiai.length;
    studentaiHTML += '</ul>';
    studentaiHTML += '<p>Vidurkis: <strong>' + vidurkis.toFixed(2) + '</strong></p>';
    studentaiHTML += '</li>';
};
studentaiHTML += '</ul>';
studentaiHTML += '</div>';
document.getElementById('studentai').innerHTML = studentaiHTML;
// Raskome studentą su didesniu pažymių vidurkiu
let didesnisVidurkis = '';
for (let i = 1; i < studentai.length; i++) {
    let studentas = studentai[i];
    let suma = 0;
    for (let pazymys of studentas.pazymiai) {
        suma += pazymys;
    }
    let vidurkis = suma / studentas.pazymiai.length;
    if (vidurkis > didesnisVidurkis) {
        didesnisVidurkis = studentas;
    }
}
// Generuojame HTML studentui su didesniu pažymių vidurkiu
let didesnisVidurkisHTML = '<div class="didziausias-vidurkis">';
didesnisVidurkisHTML += '<h2>Didžiausias vidurkis</h2>';
didesnisVidurkisHTML += '<p>' + didesnisVidurkis.vardas + ' ' + didesnisVidurkis.pavarde + '</p>';
didesnisVidurkisHTML += '<p>Vidurkis: <strong>' + (didesnisVidurkis.pazymiai.reduce((a, b) => a + b) / didesnisVidurkis.pazymiai.length).toFixed(2) + '</strong></p>';
didesnisVidurkisHTML += '</div>';
document.getElementById('didziausias-vidurkis').innerHTML = didesnisVidurkisHTML;
