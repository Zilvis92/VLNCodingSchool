const naujaUzduotis = {
    userID: 1,
    id: 101,
    title: "Nauja užduotis",
    body: "Tai yra nauja užduotis, kurią reikia atlikti.",
    completed: false,
    jonas: "Jonas",
};

axios.post('https://jsonplaceholder.typicode.com/posts', naujaUzduotis)
    .then(response => {console.log('Response:', response.data);})
    .catch(error => {console.error('Klaida:', error);});
    