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

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename
// objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
// žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
// išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
// informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
// kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
// kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

let book1 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    price: 10.99,
    pages: 180,
    chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
    releaseYear: 1925,
    availableInStores: true
};
let book2 = {
    title: 'Cinderella',
    author: 'Charles Perrault',
    genre: 'Fairy Tale',
    price: 5.99,
    pages: 50,
    chapters: ['Chapter 1', 'Chapter 2'],
    releaseYear: 1697,
    availableInStores: false
};

console.log(book1);
console.log();
console.log(book2);
console.log();

let thinnerBook = book1.pages < book2.pages ? book1.title : book2.title;
console.log(`Plonesnė knyga: ${thinnerBook}`);
console.log();

let moreChaptersBook = book1.chapters.length > book2.chapters.length ? book1.title : book2.title;
console.log(`Knygoje daugiau skyrių: ${moreChaptersBook}`);
console.log();

let cheaperBook = book1.price < book2.price ? book1 : book2;
let expensiveBook = book1.price > book2.price ? book1 : book2;
let doubledPrice = cheaperBook.price * 2;
console.log(`Pigiausios knygos kaina padvigubinta: ${doubledPrice}`);

if (doubledPrice > expensiveBook.price) {
    console.log(`Pigiausios knygos kaina padvigubinta (${doubledPrice}) yra didesnė už kitos knygos kainą (${expensiveBook.price})`);
} else {
    console.log(`Pigiausios knygos kaina padvigubinta (${doubledPrice}) yra mažesnė už kitos knygos kainą (${expensiveBook.price})`);
};
console.log();

// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte
// sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
// turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
// visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
// (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
// išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
// prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// pelningumą ((kaina - savikaina) * kiekis sandėlyje).
let product1 = {
    name: 'Laptop',
    price: 1200,
    cost: 800,
    code: 'LAP123',
    quantityInStock: 50,
    dimensions: {
        x: 15,
        y: 10,
        z: 1
    }
};
let product2 = {
    name: 'Smartphone',
    price: 800,
    cost: 500,
    code: 'PHO456',
    quantityInStock: 100,
    dimensions: {
        x: 6,
        y: 3,
        z: 0.5
    }
};
let product3 = {
    name: 'Tablet',
    price: 600,
    cost: 400,
    code: 'TAB789',
    quantityInStock: 75,
    dimensions: {
        x: 10,
        y: 7,
        z: 0.5
    }
};
console.log(product1);
console.log();
console.log(product2);
console.log();
console.log(product3);
console.log();

let prices = `Pirmas produktas kainuoja - ${product1.price}, antras produktas kainuoja - ${product2.price}, trečias produktas kainuoja - ${product3.price}`;
console.log(prices);
console.log();

const products = [product1, product2, product3];
let mostExpensiveProduct = products[0];

for (const product of products) {
    if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
    }
}
console.log(`Brangiausia prekė: ${mostExpensiveProduct.name}, kaina: ${mostExpensiveProduct.price}`);
console.log();

let product1Volume = product1.dimensions.x * product1.dimensions.y * product1.dimensions.z;
let product2Volume = product2.dimensions.x * product2.dimensions.y * product2.dimensions.z;
let product3Volume = product3.dimensions.x * product3.dimensions.y * product3.dimensions.z;
console.log(`Pirmo produkto tūris: ${product1Volume}`);
console.log(`Antro produkto tūris: ${product2Volume}`);
console.log(`Trečio produkto tūris: ${product3Volume}`);
console.log();

let product1Profitability = (product1.price - product1.cost) * product1.quantityInStock;
let product2Profitability = (product2.price - product2.cost) * product2.quantityInStock;
let product3Profitability = (product3.price - product3.cost) * product3.quantityInStock;
console.log(`Pirmo produkto pelningumas: ${product1Profitability}`);
console.log(`Antro produkto pelningumas: ${product2Profitability}`);
console.log(`Trečio produkto pelningumas: ${product3Profitability}`);
console.log();

// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
// reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai,
// spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
// informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
// įrašykite dabartinius metus arba panaudokite new
// Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
// vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
// kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
let car = {};
car.brand = 'Toyota';
car.model = 'Corolla';
car.mileage = 50000;
car.productionYear = 2018;
car.color = 'Red';
car.engineVolume = 1.8;
car.isDamaged = false;
car.isForSale = true;
console.log(car);
console.log();

let currentYear1 = new Date(Date.now()).getFullYear();
let carAge = currentYear1 - car.productionYear;

console.log(`Automobilis yra ${carAge} metai`);
console.log();

let averageMileagePerYear = car.mileage / carAge;
console.log(`Vidutiniškai per metus automobilis nuvažiavo ${averageMileagePerYear} km`);
console.log();

// 6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes
// su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
// Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai padarykite.
let myObject = {
    name: 'My Object',
    type: 'Example',
    value: 100,
    isActive: true,
    createdAt: new Date('2023-01-01')
};
console.log(myObject);
console.log();

let objectAge = new Date(Date.now()) - myObject.createdAt;
let objectAgeInDays = Math.floor(objectAge / (1000 * 60 * 60 * 24));
console.log(`Objekto amžius: ${objectAgeInDays} dienos`);
console.log();

let objectValue = myObject.value;
let objectValueInEuros = objectValue * 0.85; // Assuming 1 USD = 0.85 EUR
console.log(`Objekto vertė eurais: ${objectValueInEuros}`);
console.log();