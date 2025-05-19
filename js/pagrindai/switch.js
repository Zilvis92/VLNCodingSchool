// 2. Susikurkite kintamuosius trims skaičiams saugoti ir priskirkite jiems reiškmes. Tikrinkite pirmą skaičių:
// 1. Ar pirmas skaičius lygus 1? Jei taip, išvesti visų trijų skaičių sumą.
// 2. Ar pirmas skaičius lygus 2? Jei taip, išvesti antro ir trečio skaičių sandaugą.
// 3. Ar pirmas skaičius lygus 3? Jei taip, išvesti pirmo skaičiaus kvadratą.
// 4. Jei nei vienas variantas netinka, išveskite klaidos pranešimą.
let sk1 = 12;
let sk2 = 5;
let sk3 = 8;

switch (sk1) {
    case 12:
        console.log("Visų trijų skaičių suma: " + (sk1 + sk2 + sk3));
        break;
    case 22:
        console.log("Antro ir trečio skaičių sandauga: " + (sk2 * sk3));
        break;
    case 37:
        console.log("Pirmo skaičiaus kvadratas: " + (sk1 * sk1));
        break;
    default:
        console.log("Klaida: pirmas skaičius neatitiko jokio varianto");
}

// 3. Susikurkite kintamąjį klaidos kodui saugoti, jam priskirkite kokį nors
// klaidos kodą. Tikrinkite koks tai klaidos kodas (bent 3 skirtingus variantus),
// ties kiekvienu jų išveskite skirtingą tekstą, nurodantį, kad bus atliekami
// skirtingi veiksmai.

let klaidosKodas = 404;

switch (klaidosKodas) {
    case 404:
        console.log("Klaidos kodas 404 - bus atliekamas puslapio perkrovimas");
        break;
    case 500:
        console.log("Klaidos kodas 500 - bus atliekamas serverio restartas");
        break;
    case 403:
        console.log("Klaidos kodas 403 - bus atliekamas prieigos patikrinimas");
        break;
    default:
        console.log("Nežinomas klaidos kodas - bus atliekamas bendras klaidos tvarkymas");
}