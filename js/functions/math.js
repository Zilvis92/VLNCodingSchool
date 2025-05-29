function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

function average(...numbers) {
    let sum =numbers.reduce((acc, num) => acc +num, 0);
    return sum / numbers.length;
}

export { sum, multiply, average };