// 10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti
// kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
// tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        document.getElementById('compare').innerHTML += `<p>${num1} yra didesnis už ${num2}</p>`;
    } else if (num1 < num2) {
        document.getElementById('compare').innerHTML += `<p>${num2} yra didesnis už ${num1}</p>`;
    } else {
        document.getElementById('compare').innerHTML += `<p>${num1} ir ${num2} yra lygūs</p>`;
    }
}

function toCallCompareNumbers() {
    compareNumbers(5, 10);
    compareNumbers(15, 7);
    compareNumbers(20, 20);
}
toCallCompareNumbers();
// -------------------------------------------------------

// 11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė,
// modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti
// kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.
const car = [
    { brand: 'Toyota', model: 'Corolla', year: 2020, engine: 1.8 },
    { brand: 'Honda', model: 'Civic', year: 2019, engine: 2.0 },
];
function carDetails(brand, model, year, engine) {
    document.getElementById('car').innerHTML += `<p>${brand} ${model} (${year}) - ${engine}L</p>`;
}

function toCallCarDetails() {
    for (const vehicle of car) {
        carDetails(vehicle.brand, vehicle.model, vehicle.year, vehicle.engine);
    }
}
toCallCarDetails();
// -------------------------------------------------------

// 12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du
// skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias
// pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną
// funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas,
// perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.

