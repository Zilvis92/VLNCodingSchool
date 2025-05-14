// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą
// ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let first = array[0];
let last = array[array.length - 1];
let middle1 = array[4];
let middle2 = array[5];
let length_of_array = array.length;
console.log(`Pirmas narys: ${first}
    \nPaskutinis narys: ${last}
    \nViduriniai nariai: ${middle1}, ${middle2}
    \nMasyvo ilgis: ${length_of_array}`
);
console.log('---------------');

// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo
// informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Pradinis masyvas: ' + array2);
console.log();
array2[0] = 22;
array2[5] = 33;
array2[9] = 44;
console.log('Pakeistas masyvas: ' + array2);
console.log('---------------');

// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.
let fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.push('Orange');
console.log('Užpildytas masyvas: ' + fruits);
console.log('---------------');

// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.
let randomNumbers = [];
for (let i = 0; i < 6; i++ ) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log('Atsitiktiniai skaičiai: ' + randomNumbers);
console.log('---------------');


// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push
// funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.

let Petras = [7, 9, 9];
let Jonas = [8, 10, 9];
let PetrasAverage = Math.round((Petras[0] + Petras[1] + Petras[2]) / 3);
let JonasAverage = (Jonas[0] + Jonas[1] + Jonas[2]) / 3;
console.log('Petro vidurkis: ' + PetrasAverage);
console.log('Jono vidurkis: ' + JonasAverage);
if (PetrasAverage > JonasAverage) {
    console.log('Petro vidurkis didesnis');
} else {
    console.log('Jono vidurkis didesnis');
}
console.log('---------------');

// 6. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
let studyPrograms = ['Informatika', 'Matematika', 'Fizika', 'Chemija'];
for (let i = 0; i < studyPrograms.length; i++) {
    console.log(`${i + 1} studijų programa: ${studyPrograms[i]}`);
}
console.log('---------------');

// 7. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu 'šalis' ir tada nurodant šalį iš masyvo.
let coutries = ['Lietuva', 'Latvija', 'Estija', 'Lenkija', 'Vokietija'];
for (let i = 0; i < coutries.length; i++) {
    console.log(`Šalis: ${coutries[i]}`);
}
console.log('---------------');

// 8. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
let projects = ['Projektas pabaigti mokykla', 'Projektas pabaigti studijas', 'Projektas kiemo tvarkymas', 'Projektas namo statyba'];
for (let i =0; i < projects.length; i++) {
    console.log(`${i + 1}: ${projects[i]}`)
}
console.log('---------------');

// 9. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
}
console.log('---------------');

