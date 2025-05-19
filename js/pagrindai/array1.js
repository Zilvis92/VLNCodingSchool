// 17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite
// visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...
const words = ['medis', 'tvora', 'namas', 'sodas', 'kelias'];

for (const i in words) {
    let word = words[i];

    console.log(`${i} - ${word}`);
}
console.log();

//18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis.
// Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą
// atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
const shoppingList = ['pienas', 'duona', 'kava', 'sviestas', 'sūris'];
console.log(`Pirkinių sąraše yra ${shoppingList.length} prekes:`);

for (const i in shoppingList) {
    let item = shoppingList[i];

    console.log(`+ ${item}`);
}
console.log();

// 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
// duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
const grades = [8, 9, 10, 7, 6];
let sum = 0;

for (const i in grades) {
    let grade = grades[i];

    sum += grade;
    console.log(`Pažymys: ${grade}`);
}
const average = sum / grades.length;
console.log(`Pažymių vidurkis: ${average}`);
console.log();

// 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir
// užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius
// reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus
// per dieną kilometrus, kurie yra didesni nei 150.
const roadTrip = [120, 145, 90, 200, 160, 180, 150];

for (const i in roadTrip) {
    let km = roadTrip[i];

    if (km >150) {
        console.log(`Nuvažiuota kilometrų: ${km}`);
    }
}
console.log();

// 21.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis.
// Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais
// galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.
const files = ['data.txt', 'image.jpg', 'document.pdf', 'notes.json', 'data.json', 'script.js'];

for (const i in files) {
    let file = files[i];

    if (file.endsWith('.txt') || file.endsWith('.json')) {
        console.log(`Failas: ${file}`);
    }
}
console.log();

// 22.Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. 
// Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.
const cars = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];

for (const i of cars) {
    let car = i;

    console.log(`Automobilis: ${car}, raidžių skaičius: ${car.length}`);
}
console.log();

// 23.Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą
// duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui,
// taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas
// "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu
// kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.
const errorCodes = ['ui87', 'sys12', 'net34', 'db45', 'auth56'];
const errorMessages = {
    'ui87': 'Grafinės sąsajos klaida navigacijoje',
    'sys12': 'Trūksta operatyviosios atminties sistemoje',
    'net34': 'Tinklo ryšio klaida',
    'db45': 'Duomenų bazės klaida'
};

for (const i of errorCodes) {
    let code = i;

    if (errorMessages[code]) {
        console.log(`Klaida: ${errorMessages[code]}`);
    } else {
        console.log(`Nežinoma klaida: ${code}`);
    }
}
console.log();

// 24.Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve
// yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus
// išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus
// atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu
// yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės
// užteks maždaug 11 dienų ir t.t.
const stock = [74, 54, 32, 100, 150];
const dailySales = 5;

for (const i of stock) {
    let quantity = i;
    let days = Math.ceil(quantity / dailySales);

    console.log(`Prekės likutis: ${quantity}, užteks maždaug ${days} dienų.`);
}
console.log();

// 25.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai
// sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas
// gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų
// pažymių kiekį.
const studentGrades = [];
const numGrades = 10;
const minGrade = 1;
const maxGrade = 10;

for (let i = 0; i < numGrades; i++) {
    studentGrades.push(Math.floor(Math.random() * (maxGrade - minGrade + 1)) + minGrade);
}
let sumGrades = 0;
let negativeCount = 0;

for (const i of studentGrades) {
    let grade = i;

    sumGrades += grade;
    if (grade < 5) {
        negativeCount++;
    }
}
const averageGrade = sumGrades / studentGrades.length;
console.log(`Teigiami pažymiai: ${studentGrades.filter(grade => grade > 5).join(', ')}`);
console.log(`Vidurkis: ${averageGrade}`);
console.log(`Neigiamų pažymių kiekis: ${negativeCount}`);
console.log();

// 26.Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento
// pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno
// studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir
// nurodykite kuris studentas turi didesnį vidurkį.
const student1Marks = [8, 9, 7, 10, 6];
const student2Marks = [9, 8, 10, 7, 9];

let student1Sum = 0;
for (const i in student1Marks) {
    student1Sum = student1Sum + student1Marks[i];
}
const student1Average = student1Sum / student1Marks.length;

let student2Sum = 0;
for (const i in student2Marks) {
    student2Sum = student2Sum + student2Marks[i];
}
const student2Average = student2Sum / student2Marks.length;

console.log("Pirmojo studento pažymiai:");
for (const i in student1Marks) {
    console.log(student1Marks[i]);
}
console.log("Pirmojo studento vidurkis: " + student1Average);

console.log("Antrojo studento pažymiai:");
for (const i in student2Marks) {
    console.log(student2Marks[i]);
}
console.log("Antrojo studento vidurkis: " + student2Average);

if (student1Average > student2Average) {
    console.log("Pirmasis studentas turi didesnį vidurkį.");
} else if (student2Average > student1Average) {
    console.log("Antrasis studentas turi didesnį vidurkį.");
} else {
    console.log("Abiejų studentų vidurkiai yra lygūs.");
}
console.log();

// 27.Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą
// duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro
// mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.
const wordsArray = ['medinis', 'tvora', 'namas', 'sodo', 'kelt'];
const shortWords = [];

for (const i in wordsArray) {
    let word = wordsArray[i];

    if (word.length < 5) {
        shortWords.push(word);
    }
}
console.log(`Pradiniai žodžiai: ${wordsArray.join(', ')}`);
console.log(`Atrinkti trumpi žodžiai: ${shortWords.join(', ')}`);
console.log();