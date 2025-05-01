// task (3/3) 7.
// console.log('+--------+--------+');
// console.log('| Vardas | Amzius |');
// console.log('+--------+--------+');
// console.log('| Tomas  |   25   |');
// console.log('| Jonas  |   26   |');
// console.log('| Juste  |   25   |');
// console.log('+--------+--------+');

// console.log(
//     '+--------+--------+\n' +
//     '| Vardas | Amzius |\n' +
//     '+--------+--------+\n' +
//     '| Tomas  |   25   |\n' +
//     '| Jonas  |   26   |\n' +
//     '| Juste  |   25   |\n' +
//     '+--------+--------+'
//   );

// task 8.  data:25/05/01
// (sunkesne) Susikurkite dvizenkli skaiciu. Raskite jo skaitmeny suma.
// Pavyzdziui: 58 -> 5 + 8 = 13.
// Kad gauti pirma skaitmeni galima dalinti is 10 (ir panaudoti
// Math.floor(skaicius) arbaMath.ceil(skaicius)).
// Kad gauti antra skaitmeni galima dalinti su % is 10.
console.log(Math.floor(58 / 10) + (58 % 10));
console.log('---------------------------------------------------------------------');
// Dabar pagal tas pacias salygas sugalvoti skaiciu 3 skaitmenu.
// Pavyzdziui: 123 -> 1 + 2 + 3 = 6.
console.log(Math.floor(123 / 100) + Math.floor((123 % 100) / 10) + (123 % 10));
console.log('---------------------------------------------------------------------');
// Dabar pagal tas pacias salygas sugalvoti skaiciu 4 skaitmenu.
// Pavyzdziui: 1234 -> 1 + 2 + 3 + 4 = 10.
console.log(Math.floor(1234 / 1000) + Math.floor((1234 % 1000) / 100) + Math.floor((1234 % 100) / 10) + (1234 % 10));
console.log('---------------------------------------------------------------------');