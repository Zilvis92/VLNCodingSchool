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

function sum(a, b) {
    const result = a +b;
    document.getElementById('sum').innerHTML += `<p>${a} + ${b} = ${result}</p>`;
}

function difference(a, b) {
    const result = a - b;
    document.getElementById('difference').innerHTML += `<p>${a} - ${b} = ${result}</p>`;
}

function product(a, b) {
    const result = a * b;
    document.getElementById('product').innerHTML += `<p>${a} * ${b} = ${result}</p>`;
}

function quotient(a, b) {
    const result = (a / b).toFixed(2);
    document.getElementById('quotient').innerHTML += `<p>${a} / ${b} = ${result}</p>`;
}

function generateRandomNumbers() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    sum(num1, num2);
    difference(num1, num2);
    product(num1, num2);
    quotient(num1, num2);
}

function toCallGenerateRandomNumbers() {
    for (let i = 0; i < 3; i++) {
        generateRandomNumbers();
    }
}
toCallGenerateRandomNumbers();
// -------------------------------------------------------

// 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje
// išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
// (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
// duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
const words = ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'PHP', 'React'];

function displayWordsWithLength(wordsArray) {
    for ( const word of wordsArray) {
        const length = word.length;
        document.getElementById('words').innerHTML += `<p>${word} - ${length} simboliai</p>`;
    }
}
displayWordsWithLength(words);
// -------------------------------------------------------

// 14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį
// padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir
// užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.

const numbers1 = [1, 2, 5, 56, 100, 33];
const numbers2 = [10, 44, 3, 1, 5, 666];

function displayNumbersWithCalculations(numberArray) {
    for (const number of numberArray) {
        const square = number * number;
        const half = number / 2;
        document.getElementById('numbers').innerHTML += `<p>${number} - kvadratas: ${square}, padalinta iš dviejų: ${half}</p>`;
    }
}
displayNumbersWithCalculations(numbers1);

document.getElementById('numbers').innerHTML += '<h3>Antras skaičių masyvas</h3>';
displayNumbersWithCalculations(numbers2);
// -------------------------------------------------------

// 15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei
// studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
// pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už
// funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
// objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
// Iškvieskite šią funkciją perduodant visus reikalingus duomenis.

const students = [
    { name: 'Jonas', surname: 'Jonaitis', grades: [8, 9, 10, 7] },
    { name: 'Petras', surname: 'Petraitis', grades: [6, 7, 8, 9] },
    { name: 'Ona', surname: 'Onaitė', grades: [10, 10, 9, 8] },
];

function displayStudentInfo(name, surname, grades) {
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;
    document.getElementById('students').innerHTML += `<p>${name} ${surname} - pažymiai: ${grades.join(', ')}, vidurkis: ${average.toFixed(2)}</p>`;
}

function toCallDisplayStudentInfo() {
    for (const student of students) {
        displayStudentInfo(student.name, student.surname, student.grades);
    }
}
toCallDisplayStudentInfo();
// -------------------------------------------------------

// 16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat,
// susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų
// pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus.
// Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą
// perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti,
// masyvuose esančią informaciją išsiveskite norimu būdu (per HTML arba
// per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos
// funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.

const randomNumbers1 = [];
const randomNumbers2 = [];
const randomNumbers3 = [];

function generateRandomNumbersArray(array, count) {
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        array.push(randomNumber);
    }
}

function findMaxNumber(array) {
    let maxNumber = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    document.getElementById('max').innerHTML += `<p>Didžiausias skaičius masyve [${array.join(', ')}] yra ${maxNumber}</p>`;
}

function toCallGenerateRandomNumbersArray() {
    generateRandomNumbersArray(randomNumbers1, 5);
    generateRandomNumbersArray(randomNumbers2, 7);
    generateRandomNumbersArray(randomNumbers3, 10);

    findMaxNumber(randomNumbers1);
    findMaxNumber(randomNumbers2);
    findMaxNumber(randomNumbers3);
}
toCallGenerateRandomNumbersArray();
// -------------------------------------------------------

