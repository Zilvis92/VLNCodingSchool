// 17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite
// šią funkciją ir išspausdinkite gautus rezultatus.
function randomText() {
    return 'Labas pasauli!!!'
}
console.log(randomText());
console.log('--------------------------------------------');

// 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.
// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.
function randomNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(randomNumber());
console.log(randomNumber());
console.log('--------------------------------------------');

// 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
// Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
// 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
// perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.
function studentInfo(name, average) {
    return `Studentas ${name} turi vidurki ${average}`;
}
console.log(studentInfo('Tomas', 8.7));
console.log(studentInfo('Ona', 9.2));
console.log('--------------------------------------------');

// 20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti
// duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
// funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje
// iškvieskite šią funkciją, perduodant ciklo kintamąjį.
function findSmallestDivisor(number) {
    for (let i = 2; i <= number; i++) {
        if ( number % i === 0) {
            return i;
        }
    }
    return number;
}
for (let i = 10; i <= 30; i++) {
    console.log(`Maziausias ${i} daliklis yra ${findSmallestDivisor(i)}`);
}
console.log('--------------------------------------------');

// 22.Susikurkite bent 3 matematines funkcijas, priimančias reikiamus
// argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas,
// sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat,
// susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis
// atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais
// (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus
// kintamuosius) (pagal 23 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.
function sum(a, b) {
    return a + b;
}

function sumOutput(a, b) {
    console.log(`Suma: ${a} + ${b} = ${sum(a, b)}`);
}

let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);
sumOutput(number1, number2);
sumOutput(number1, number2);
sumOutput(50, 3);
console.log('--------------------------------------------');

// 21.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti
// ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis).
// Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje
// išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10
// false, 11 true, ...).
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
for (let i = 2; i <= 15; i++) {
    console.log(`${i} ${isPrime(i)}`);
}
console.log('--------------------------------------------');

// 23.Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų
// rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite
// du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du
// kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite.
// Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
console.log(`Pirmo masyvo suma: ${sumArray(array1)}`);
console.log(`Antro masyvo suma: ${sumArray(array2)}`);
if (sumArray(array1) > sumArray(array2)) {
    console.log('Pirmo masyvo suma didesne');
}
else if (sumArray(array1) < sumArray(array2)) {
    console.log('Antro masyvo suma didesne');
} else {
    console.log('Masyvai lygus');
}
console.log('--------------------------------------------');

// 24.Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir
// grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą.
// Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip
// pat, nurodykite šio žodžio ilgį.
function longestWord(arr) {
    let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
let words = ['labas', 'pasaulis', 'kaip', 'sekasi'];
console.log(`Ilgiausias zodis: ${longestWord(words)}`);
console.log(`Ilgio: ${longestWord(words).length}`);
console.log('--------------------------------------------');

// 25.Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų
// patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip
// atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių
// masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant
// skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote
// true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas
// turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į
// tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos
// funkcijos atsakymą.
function allPositiveGrades(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}
function convertToText(bool) {
    if (bool) {
        return 'visi studento pazymiai teigiami';
    } else {
        return 'studentas turi bent viena neigiamą pazymi';
    }
}
let grades1 = [10, 9, 8, 7];
let grades2 = [10, 9, -8, 7];
console.log(convertToText(allPositiveGrades(grades1)));
console.log(convertToText(allPositiveGrades(grades2)));
console.log('--------------------------------------------');