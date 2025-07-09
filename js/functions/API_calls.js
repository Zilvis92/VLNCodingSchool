async function getDadJoke() {

    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const dadJoke = await response.json();

    return dadJoke;
}

const jokeButton = document.getElementById('joke');
const dadJokeElement = document.getElementById('dadJoke');

jokeButton.addEventListener('click', async () => {
    const joke = await getDadJoke();
    dadJokeElement.textContent = joke.joke;
});

// Imame tik viena is saraso funkciju, kuri grazina filma is API ir atvaizduoja ji HTML'e
// async function fetchMovie() {
//     const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
//     const data = await response.json();
//     console.log(data[0]);

//     document.getElementById('movie').innerHTML = `
//         <img src="${data[0].show.image.medium}" alt="${data[0].show.name}">
//         <h3>${data[0].show.name} (${data[0].show.premiered})</h3>
//         <p>Genres: ${data[0].show.genres}</p>
//         <p>${data[0].show.summary}</p>
//     `
// }

// Imame visa sarasa funkciju, kuri grazina filma is API ir atvaizduoja ji HTML'e
async function fetchMovie() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=spirderman');
    const data = await response.json();
    // console.log(data);
    return data;
}

fetchMovie()
    .then(data => {
        const moviesContainer = document.createElement('div');
        moviesContainer.className = 'movies-container';

        for (const item of data) {
            const title = item.show.name;
            const year = item.show.premiered.slice(0, -6);
            const imgLink = item.show.image.medium;
            const genres = item.show.genres;
            const summary = item.show.summary;

            const moviesDiv = document.createElement('div');
            moviesDiv.className = 'movie';
            moviesDiv.innerHTML = `
                <img src="${imgLink}" alt="${title}">
                <h3>${title} (${year})</h3>
                <p>Genres: ${genres.join(', ')}</p>
                <p>${summary}</p>
            `;
            moviesContainer.appendChild(moviesDiv)
        }
        document.body.appendChild(moviesContainer);
    })
    .catch(err => console.log(err));

