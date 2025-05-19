// 4. Susikurkite skaidiaus kintamaji. Atlikite siuos patikrinimus ir veiksmus:
// 1. Jei skaicius dalinasi is 5, tuomet isveskite sio skaiciaus daugybos lentele nuo 1 iki 5.
// Jei skaicius lyginis, tuomet isveskite si skaiciu, jo kvadrata ir ji padalinta is 2.
// 3. Jei skaidius nesidalina is 7, tuomet susikurkite antraji kintamaji, iveskite siu dvieju skaiciu suma, skirtuma, sandauga, dalmeni.
let skaicius = 19;
if (skaicius %5 == 0) {
    console.log (`${skaicius} dalinasi iš 5 daugybos lentele nuo 1 iki 5`)
    console.log (`${skaicius} * 1 = ${skaicius * 1}`);
    console.log (`${skaicius} * 2 = ${skaicius * 2}`);
    console.log (`${skaicius} * 3 = ${skaicius * 3}`);
    console.log (`${skaicius} * 4 = ${skaicius * 4}`);
    console.log (`${skaicius} * 5 = ${skaicius * 5}`);
} 
else if (skaicius % 2 == 0) {
    console.log (`${skaicius} yra lyginis`);
    console.log (` jo kvadratas: ${skaicius ** 2} `);
    console.log (`${skaicius / 2 } dalinasi iš dviejų `);
}
else if (skaicius % 7 !== 0) {
    let skaicius2 = 5;
    if (skaicius2 != 0) {
        console.log (`${skaicius2} skaicius nesidalina iš 7`);
        console.log (` suma: ${skaicius + skaicius2}`);
        console.log (` skirtumas: ${skaicius - skaicius2}`);
        console.log (` dalmuo: ${skaicius / skaicius2}`);
        console.log (` sandauga: ${skaicius * skaicius2}`);
    }
    else {
        console.log ("dalyba iš 0 negalima");
    }
}

// 5. Susikurkite tris skaiiy kintamuosius. Patikrinkite sias salygas (naudojant else if dalis):
// 1. Ar pirmas skaidius didesnis uz antra?
// 2. Ar antras skaicius didesnis uz trecia?
// 3. Ar trecias skaidius didesnis uz pirma?
// 4. Ar pirmi du skaiciai yra lygus?
// 5. Ar paskutiniai du skaitiai yra lygus?
// 6. Ar pirmas skaicius yra lygus O?
// 7. Ar antras skaicius neigiamas?
// 8. Ar trecias skaicius teigiamas?
let pirmas = "w";
let antras = "A";
let trecias = 0;

if (pirmas > antras) {
    console.log (" pirmas didesnis "); 
} else if (antras > trecias) {
    console.log (" antras didesnis ");
} else if ( trecias > pirmas ) {
    console.log (" trecias daugiau ");
} else if ( pirmas === antras) {
    console.log (" pirmas = antras ");
} else if ( antras === trecias) {
    console.log (" antras = trecias ");
} else if ( pirmas === 0 ) {
    console.log (" pirmas = 0");
} else if ( antras < 0 ) {
    console.log (" antras = neigiamas");
} else if ( trecias > 0 ) {
    console.log (" trecias = teigiamas");
} else {
    console.log ( "niekas netiko :)")
}

// 6. Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant else if dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:
// 1. Jei pažymys yra lygus 10 išvesti “puiku”.
// 2. Jei pažymys yra lygus arba didesnis nei 9 išvesti “labai gerai”.
// 3. Jei pažymys yra lygus arba didesnis nei 7 išvesti “gerai”.
// 4. Jei pažymys yra lygus arba didesnis nei 5 išvesti “patenkinamai”.
// 5. Jei pažymys mažesnis nei 5 išvesti “egzaminas neišlaikytas”.
let pazim = 6
if (pazim == 10 ) {
    console.log ("puiku");
} else if (pazim >= 9) {
    console.log ("labai gerai");
} else if (pazim >= 7) {
    console.log ("gerai");
} else if (pazim >= 5) {
    console.log ("patenkinamai");
} else {
    console.log ("egzaminas neislaikytas");
}