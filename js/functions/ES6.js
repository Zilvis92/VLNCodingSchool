import { sum, multiply, average } from './math.js';

// 1. Sukurk funkciją, kuri iš objektų masyvo grąžina tik vardus naudotojų, kurie yra aktyvūs.
// Rezultatas: ["Jonas", "Mantas"]

const users = [
  { name: "Jonas", isActive: true },
  { name: "Aistė", isActive: false },
  { name: "Mantas", isActive: true }
];

let getActiveUserNames = (users) => {
    return users
        .filter(user => user.isActive)
        .map(user => user.name);
}
console.log(getActiveUserNames(users));
console.log('-----------------------------------');

// 2. Konvertuok masyvą į objektą, kurio raktai yra naudotojų ID, o reikšmės – naudotojų objektai. 
// Rezultatas: { 1: {id: 1, name: "Jonas"}, 2: {id: 2, name: "Aistė"} }

const users1 = [
  { id: 1, name: "Petras" },
  { id: 2, name: "Ona" }
];

let convertArrayToObject = (usersObjects) => {
    
    return usersObjects.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}
console.log(convertArrayToObject(users1));
console.log('-----------------------------------');

// 3. Parašyk šabloninį literatą (template literal), kuris grąžina tvarkingą naudotojo profilį. 
// Rezultatas: "Jonas (30) dirba kaip programuotojas."

const user = { name: "Jonas", age: 30, job: "programuotojas" };

let getUsersProfile = (user) => {
    return `${user.name} (${user.age}) dirba kaip ${user.job}.`
}
console.log(getUsersProfile(user));
console.log('-----------------------------------');

// 4. Apjunk du naudotojo duomenų objektus į vieną, naudodamas spread operatorių. 
// Rezultatas: { name: "Aistė", age: 28, job: "dizainerė", city: "Vilnius" }

const baseInfo = { name: "Aistė", age: 28 };
const extraInfo = { job: "dizainerė", city: "Vilnius" };

let getUserFullInfo = {...baseInfo, ...extraInfo};
console.log(getUserFullInfo);
console.log('-----------------------------------');

// 5. Parašyk funkciją, kuri išskaido argumentus su rest operatoriumi ir grąžina jų vidurkį. 
// average(4, 8, 10); // Rezultatas: 7.33

let average1 = (...numbers) => {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(average1(4, 8, 10));
console.log('-----------------------------------');

// 7. Sukurk Map struktūrą naudotojams, kuri leidžia greitai pasiekti naudotoją pagal ID.
// Pasiekimas: usersMap.get(2) -> { id: 2, name: "Aistė" }
const users2 = [
  { id: 1, name: "Petras" },
  { id: 2, name: "Ona" }
];

let usersObj = {};
users2.forEach(user => {
  usersObj[user.id] = user;
});
console.log(usersObj[2]);
console.log('-----------------------------------');

// 8. Iš masyvo pašalink pasikartojančius skaičius naudodamas Set.
// Rezultatas: [1, 2, 3, 4, 5]
const numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = [... new Set(numbers)];
console.log(uniqueNumbers);
console.log('-----------------------------------');

// 10. Sukurk funkciją, kuri naudoja destruktūrizaciją kaip parametrą ir iš objekto pasiima tik name ir age.
// Rezultatas: "Jonas yra 25 metų."
function showUser({ name, age }) {
  return `${name} yra ${age} metų.`;
}

// showUser({ name: "Jonas", age: 25, city: "Kaunas" });
console.log(showUser({ name: "Jonas", age: 25, city: "Kaunas" }));
console.log('-----------------------------------');

// 6. [BONUS] Parašyk async funkciją, kuri laukia 1 sekundę ir tada grąžina „Baigta“.
// await waitAndReturn(); // "Baigta"

async function waitAndReturn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Baigta");
        }, 1000);
    });
}
waitAndReturn().then(result => console.log(result));

// 9. [BONUS] Sukurk modulinį failą math.js, kuris eksportuoja sum, multiply ir average funkcijas.
// math.js
// export const sum = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// export const average = (...nums) => nums.reduce((a, b) => a + b, 0) / nums.length;
console.log("=== MATH MODULIO TESTAVIMAS ===");
console.log("Sum testas:");
console.log("sum(1, 2, 3, 4, 5) =", sum(1, 2, 3, 4, 5)); // 15
console.log("sum(10, 20) =", sum(10, 20)); // 30
console.log("sum() =", sum()); // 0

console.log("\nMultiply testas:");
console.log("multiply(2, 3, 4) =", multiply(2, 3, 4)); // 24
console.log("multiply(5, 6) =", multiply(5, 6)); // 30
console.log("multiply() =", multiply()); // 0

console.log("\nAverage testas:");
console.log("average(1, 2, 3, 4, 5) =", average(1, 2, 3, 4, 5)); // 3
console.log("average(10, 20, 30) =", average(10, 20, 30)); // 20
console.log("average() =", average()); // 0