// DOM manipuliacijos
let article = document.querySelector('#article');
let article2 = document.getElementById('article');

console.log(article);
console.log(article2);

let listElemnts = document.querySelectorAll('.side-nav > ul > li');
console.log(listElemnts);

listElemnts.forEach((item) => {
    console.log(item.textContent);
});

// sukurti naują elementą ir pridėti jį prie DOM
let element = document.createElement('div');
element.innerText = 'Naujas elementas';
element.style.color = 'red';
document.querySelector('#test').appendChild(element);

element.addEventListener('click', () => {
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
    element.innerText = 'Paspaudei ant manęs!';
});