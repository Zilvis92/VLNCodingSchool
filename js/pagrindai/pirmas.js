// console.log("hello world");
// console.log("Bandymas");

// const test = "Coding is cool ;)";
// console.log(test);

// document.getElementById('article').innerText = "Hello world! Coding is very cool!!!";
// document.getElementsByClassName('testukas').innerText = "Hello testukas!";

// task nr. 4 is dest. skaidriu
// 1. Priskirkite Marko ir Dzono svorius ir úgius i kintamiesiems.
const markoSvoris = 78;
const dzonoSvoris = 92;
const markoUgis = 1.69;
const dzonoUgis = 1.95;

// 2. Apskaiciuokite abiejy KMI naudodamiesi formule (galite panaudoti abejes versijas) KMI = svoris / ugis ** 2 = svoris / (ugis * ugis)
// const markoKMI = markoSvoris / markoUgis ** 2 = markoSvoris / (markoUgis * markoUgis);
// const dzonoKMI = dzonoSvoris / dzonoUgis ** 2 = dzonoSvoris / (dzonoUgis * dzonoUgis);
const markoKMI = markoSvoris / (markoUgis * markoUgis);
const dzonoKMI = dzonoSvoris / (dzonoUgis * dzonoUgis);
console.log("Marko KMI: " + markoKMI);
console.log("Dzono KMI: " + dzonoKMI);
console.log('---------------------------------------------------------------------');
// 3. Sukurkite Boolean tipo kintamaji 'markoDidesnisKMI' kuris saugos informacija ar Markas turi didesnj KMI nei Dzonas
const markoDidesnisKMI = markoKMI > dzonoKMI;
console.log("Marko KMI didesnis uz Dzonos: " + markoDidesnisKMI);
console.log('---------------------------------------------------------------------');
// IF Uzduotis Nr. 2 skaidres
let a = -5;
let b = 0;
let c = -4;
let d = 4;

let x = a;
if (c > a) {
  x = c;
}

let y = b;
if (d < b) {
  y = d;
}

if (x <= y) {
    console.log("Sankirta nuo " + x + " iki " + y);
  } else {
    console.log("Intervalai nesikerta.");
  }
  console.log('---------------------------------------------------------------------');

//   IF Uduotis Nr. 3 skaidres
let q = 2;
let w =8;
let e = 6;
let output = document.getElementById("output");

if (q < w && q < e) {
    // console.log("Mažiausias skaičius yra: " + q);
    output.textContent = "q";
} else if (w < q && w < e) {
    // console.log("Mažiausias skaičius yra: " + w);
    output.textContent = "w";
} else if (e < q && e < w) {
    // console.log("Mažiausias skaičius yra: " + e);
    output.textContent = "e";
}
