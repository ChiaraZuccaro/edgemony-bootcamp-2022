//                              FUNZIONI ESERCITAZIONE 25-03-22

const q = (selector) => document.querySelector(selector);


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

const zoomMov = (cardObj) => {
    const h3ElZoom = document.createElement("h3");
    const descElZoom = document.createElement("p");
    const imgElZoom = document.createElement("img");
    const genresElZoom = document.createElement("h6");
    const yearElZoom = document.createElement("h5");
    const numbElZoom = document.createElement("p");
    const divElZoom = document.createElement("div"); 


    cardObj.map((movie) => {
        h3ElZoom.textContent = `${movie.title}`;
        for(let i = 0; i < movie.genres.length; i++) {
            genresElZoom.textContent = `${cardObj.genres[i].toUpperCase()}`;
        }
        descElZoom.textContent = `${movie.description}`;
        yearElZoom.textContent = `${movie.year}`;
        numbElZoom.textContent = `${movie.id}`;



        imgElZoom.setAttribute("src",`${movie.poster}`);
        imgElZoom.setAttribute("width","150px");
        imgElZoom.setAttribute("height","auto");
        imgElZoom.setAttribute("alt","movie's image");


        divElZoom.classList.add("cards");
        divElZoom.append( h3ElZoom, genresElZoom, imgElZoom, descElZoom, yearElZoom, numbElZoom);
    });

    
    q(".zoom-card").appendChild(divElZoom);
    q(".black-layer").classList.remove("hidden");
    
    q(".black-layer").addEventListener("click", () => {
        q(".black-layer").classList.add("hidden");
        q(".zoom-card").removeChild(q(".cards"));
    });
}


const createCard = (movie) => {
    const h3El = document.createElement("h3");
    const descEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const genresEl = document.createElement("h6");
    const yearEl = document.createElement("h5");
    const divEl = document.createElement("div");
    const divChoice = document.createElement("div");
    const divAll = document.createElement("div");


    h3El.textContent = `${movie.title}`;
    for(let i = 0; i < movie.genres.length; i++) {
        genresEl.textContent = `${movie.genres[i].toUpperCase()}`;
    }
    descEl.textContent = `${movie.description}`;
    yearEl.textContent = `${movie.year}`;


    imgEl.setAttribute("src",`${movie.poster}`);
    imgEl.setAttribute("width","150px");
    imgEl.setAttribute("height","auto");
    imgEl.setAttribute("alt","movie's image");

    divChoice.classList.add("new-choice");

    divAll.classList.add("all-info");
    divAll.append( h3El, imgEl, genresEl, descEl, yearEl);

    divEl.append( divChoice, divAll);
    divEl.classList.add("cards");

    q(".movies").appendChild(divEl);
};

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

const getApi = async () => {
    const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        }
    })
    

    if (res.status >= 200 && res.status <= 299) {
        return await res.json();
    }
    else {
        pageError();
    }
}


const deleteCard = (card, index) => {    
    fetch(`https://edgemony-backend.herokuapp.com/movies/${index}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
        },
    });

    card.innerHTML = `<h2 class="erased">Film cancellato</h2>`;
    console.log(card);
    setTimeout(() => location.reload(), 2000);
};

const choiceCard = (card, list) => {
    const choiceSel = document.querySelectorAll(".new-choice");   
    const cardEl = [];
    let ans;

    
    for ( let i = 0; i < list.length; i++) {
        if(card.outerHTML.toLowerCase().split("").join("").includes(list[i].title.toLowerCase())) {
            console.log("dentro if");
            cardEl.push(list[i]);            
            break;
        }
    }

    
    let indexCardEl;
    cardEl.map((movie) => indexCardEl = movie.id);
    

    choiceSel.item(indexCardEl - 1).innerHTML = `
        <span>Come desideri procedere?</span>
        <div class="choice">
            <div class="user-choice">                    
                <label for="delete">Elimina</label>
                <input type="radio" id="delete" name="choice" value="delete">
            </div>
            <div class="user-choice">                
                <input type="radio" id="zoom" name="choice" value="zoom">
                <label for="zoom">Espandi</label>
            </div>
        </div>
        <button id="choice-btn">Conferma</button>
    `;
    card.classList.remove("all-info");
    card.classList.add("hidden");

    const radioChoices = document.querySelectorAll('input[name="choice"]');
    
    q("#choice-btn").addEventListener("click", () => {
        for (const radioChoice of radioChoices) {
            if(radioChoice.checked) {
                ans = radioChoice.value;
                break;
            }
        }
        console.log(ans);
        if (ans === "delete") {
            deleteCard(card, indexCardEl);
        } else if(ans === "zoom") {
            zoomMov(cardEl);
        }


        choiceSel.item(indexCardEl - 1).innerHTML = "";
        card.classList.add("all-info");
        card.classList.remove("hidden");
    });    
}



const addGenre = (string) => {
    const divNewGenre = document.createElement("div");
    const labelNew = document.createElement("label");
    const inputNew = document.createElement("input");

    divNewGenre.classList.add("user-check");

    labelNew.setAttribute("for", `${string.toLowerCase()}`);
    labelNew.innerHTML = `${string}`;

    inputNew.setAttribute("id", `${string.toLowerCase()}`);
    inputNew.setAttribute("type", "checkbox");
    inputNew.setAttribute("name", "genres");
    inputNew.setAttribute("value", `${string}`);


    divNewGenre.append(labelNew, inputNew);

    q(".check-flex").appendChild(divNewGenre);
}

const loadGenre = (list, userValue) => {
    for(let i = 0; i < list.length; i++) {
        addGenre(list[i]);
        if(list[i].toLowerCase().includes(userValue)){
            return list;
        }
    }

    list.push(userValue);
    return list;
}



export { q, zoomMov, createCard, getNew, getApi, deleteCard, choiceCard, loadGenre, addGenre }