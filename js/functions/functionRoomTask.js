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