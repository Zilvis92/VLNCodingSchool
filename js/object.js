// 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
// uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
// sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
// informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
// biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
// kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
// panaudoti new Date(Date.now()).getFullYear() funkciją).

let movie = {
    title: 'Inception',
    director: 'Cristopher Nolan',
    budget: 160000000,
    earnings: 829895144,
    genre: 'Action',
    duration: 148,
    releaseYear: 2010,
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy', 'Ken Watanabe']
};

console.log(movie);
console.log();

let profit = movie.earnings - movie.budget;
console.log(`Filmo pelnas: ${profit}`);
console.log();

let actorsCount = movie.actors.length;
console.log(`Filme dalyvavo aktorių: ${actorsCount}`);
console.log();

let currentYear = new Date(Date.now()).getFullYear();
let movieAge = currentYear - movie.releaseYear;
console.log(`Filmo amžius: ${movieAge} metai`);
console.log();