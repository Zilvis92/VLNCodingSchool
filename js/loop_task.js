// 1. Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10.
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("---------------");
// 2. Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.
for (let i = 0; i <= 15; i += 2) {
    console.log(i);
}
console.log("---------------");
// 3. Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20.
// Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: [1][4][7]...
for (let i = 1; i <= 20; i += 3) {
    console.log("[" + i + "]");
}
console.log("---------------");
// 4. Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if
// sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        console.log(i);
    }
}
console.log("---------------");


// 5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei
// atskiriant tarpu - tų skaičių kvadratus.
let start = 1;
let end = 10;

if (start < end) {
    for (let i = start; i <= end; i++) {
        console.log(i + "=" + i * i);
    }
}
console.log("---------------");
// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos,
// kurie dalinasi iš 8.
let start2 = 1;
let end2 = 16;

if (start2 < end2) {
    for (let i = start2; i <= end2; i++) {
        if (i % 2 !== 0 || i % 8 === 0) {
            console.log(i);
        }
    }
}
console.log("---------------");
// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.
// Tam pasinaudoti for ciklu. Pvz.: 3 * 4 = 3 + 3 + 3 + 3
let num1 = 3;
let num2 = 4;
let result = 0;

for (let i = 0; i < num2; i++) {
    result += num1;
}
console.log(result);
console.log("---------------");
