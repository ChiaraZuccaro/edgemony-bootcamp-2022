//                               ESERCITAZIONE 24-03-22

const q = (selector) => document.querySelector(selector);

// const formatMinText = (text) => text.split(" ").slice(0, 15).join(" ") + " ...";

const pageError = () => {
    const h1Err = document.createElement("h1");
    const imgErr = document.createElement("img");
    const divErr = document.createElement("div");

    h1Err.textContent = "Pagina non trovata! ";
    imgErr.setAttribute("src", "https://cdn.iconscout.com/icon/free/png-256/cry-face-sad-tear-emoji-37717.png");
    imgErr.setAttribute("alt", "image error");

    divErr.append(h1Err, imgErr);
    document.body.appendChild(divErr);
}

const getApi = async () => {
    const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        }
    });

    if (res.status >= 200 && res.status <= 299) {
        return await res.json();
    }
    else {
        pageError();
    }
}

const getNew = () => {
    const title = q("#title").value;
    const description = q("#description").value;
    const year = q("#year").value;
    const poster = q("#poster").value;
    const genreEls = document.getElementsByName("genres");
    const genres = [];
    let movies = {};


    for(let i = 0; i < genreEls.length; i++) {
        if(genreEls[i].checked) {
            genres.push(genreEls[i].value);
        }
    }

    return movies = {
        title: title,
        description: description,
        year: year,
        poster: poster,
        genres: genres
    }
}

const createCard = (movie) => {
    const h3El = document.createElement("h3");
    const xDelete = document.createElement("img");
    const descEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const genresEl = document.createElement("h6");
    const yearEl = document.createElement("h5");
    const divEl = document.createElement("div");
    const divXTitle = document.createElement("div");

    h3El.textContent = `${movie.title}`;
    // genresEl.textContent = `${movie.genres.toUpperCase()}`;
    descEl.textContent = `${movie.description}`;
    yearEl.textContent = `${movie.year}`;

    divXTitle.append(h3El, xDelete);
    divXTitle.classList.add("titlex");

    xDelete.setAttribute("class", "xIcon");
    xDelete.setAttribute("src", "./cross.png");
    xDelete.setAttribute("alt", "delete");
    xDelete.setAttribute("width", "16px");
    xDelete.setAttribute("height", "16px");

    imgEl.setAttribute("src",`${movie.poster}`);
    imgEl.setAttribute("width","100px");
    imgEl.setAttribute("height","auto");
    imgEl.setAttribute("alt","movie's image");

    divEl.append( divXTitle, genresEl, imgEl, descEl, yearEl);
    divEl.classList.add("cards");

    q(".movies").appendChild(divEl);
};

getApi().then((data) => data.map((movie) => createCard(movie)));

q("#sub").addEventListener("click", (event) => {
    event.preventDefault();

    fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
    }).then(() => location.reload());
});

// q("#reset").addEventListener("click", () => {
//     fetch("https://edgemony-backend.herokuapp.com/movies", {
//         method: "DELETE",
//         headers: {
//             "Content-Type" : "application/json",
//         },
//         body: JSON.stringify(""),
//     }).then(() => location.reload());
// });

//    Funzione X Cancella
const deleteCard = (card) => {
    card.innerHTML = `<h2 class="erased">Film cancellato</h2>`;
    console.log(card);
    setTimeout(() => {
        q(".titlex").removeChild(card);
    }, 2000);
};

setTimeout(() => {
    const cardsEls = document.querySelectorAll(".cards");
    console.log(cardsEls);
    cardsEls.forEach((card) => {
        const titlexEls = document.querySelectorAll(".titlex");
        titlexEls.forEach((titlex) => {
            const xEls = document.querySelectorAll(".xIcon");
            xEls.forEach((x) => x.addEventListener("click", () => console.log(x)));
        });
    });
} , 5000);