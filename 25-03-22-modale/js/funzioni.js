//                              FUNZIONI ESERCITAZIONE 25-03-22

const q = (selector) => document.querySelector(selector);
let genresList = [];

const formatMinText = (text) => text.split(" ").slice(0, 15).join(" ") + " ...";

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
    descEl.textContent = `${formatMinText(movie.description)}`;
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

    card.innerHTML = `<h2 class="erased">Movie deleted</h2>`;
    setTimeout(() => location.reload(), 2000);
}
const zoomMov = (cardObj) => {
    const titleElZoom = document.createElement("h3");
    const descElZoom = document.createElement("p");
    const imgElZoom = document.createElement("img");
    const genresElZoom = document.createElement("h6");
    const yearElZoom = document.createElement("h5");
    const divElZoom = document.createElement("div"); 
    const divInfo = document.createElement("div");


    cardObj.map((movie) => {
        titleElZoom.textContent = `${movie.title}`;
        for(let i = 0; i < movie.genres.length; i++) {
            genresElZoom.textContent = `${movie.genres[i].toUpperCase()}`;
        }
        descElZoom.textContent = `${movie.description}`;
        yearElZoom.textContent = `${movie.year}`;



        imgElZoom.setAttribute("src",`${movie.poster}`);
        imgElZoom.setAttribute("width","150px");
        imgElZoom.setAttribute("height","auto");
        imgElZoom.setAttribute("alt","movie's image");


        divInfo.classList.add("info");
        divInfo.append( titleElZoom, genresElZoom, descElZoom, yearElZoom)

        divElZoom.classList.add("cards");
        divElZoom.append(imgElZoom, divInfo);
    });

    
    q(".zoom-card").appendChild(divElZoom);
    q(".black-layer").classList.remove("hidden");
    
    q(".black-layer").addEventListener("click", () => {
        q(".black-layer").classList.add("hidden");
        q(".zoom-card").removeChild(q(".cards"));
    });
}
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
        <span>How you would like to proceed?</span>
        <div class="choice">
            <div class="user-choice">                    
                <label for="delete">Delete movie</label>
                <input type="radio" id="delete" name="choice" value="delete">
            </div>
            <div class="user-choice">                
                <input type="radio" id="zoom" name="choice" value="zoom">
                <label for="zoom">See details</label>
            </div>
        </div>
        <button id="choice-btn">Confirm</button>

        <div class="back">
            <button id="back-btn">Go back</button>
        </div>
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
        } else {
             return alert("You need to choose");
        }


        choiceSel.item(indexCardEl - 1).innerHTML = "";
        card.classList.add("all-info");
        card.classList.remove("hidden");
    });


    q("#back-btn").addEventListener("click", () => {
        choiceSel.item(indexCardEl - 1).innerHTML = "";
        card.classList.add("all-info");
        card.classList.remove("hidden");
    });
}





const createGenre = (string) => {
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

    setTimeout(() => {
        q(".check-flex").appendChild(divNewGenre);
    }, 50)
}

const loadGenre = (list) => {
    for(let i = 0; i < list.length; i++) {           
        createGenre(list[i]);
    }
    return list;
}

const addGenre = (userValue, list) => {
    for(let i = 0; i < list.length; i++){
        if(userValue == list[i]) {
            alert("Genere già esistente! Inserirne uno nuovo.");
            return list;
        }
    }

    createGenre(userValue);
    list.push(userValue);

    console.log(list);
    return list;
}



const formTitle = () => {    
    const divTitle = document.createElement("div");
    
    const labelTitle = document.createElement("label");
    const inputTitle = document.createElement("input");

    divTitle.classList.add("user");
    
    labelTitle.setAttribute("for", "title");
    inputTitle.setAttribute("id", "title");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("placeholder", "here your title...");

    labelTitle.textContent = "Title: "

    divTitle.append(labelTitle, inputTitle);

    return divTitle;
}
const formPoster = () => {
    const divPoster = document.createElement("div");

    const labelPoster = document.createElement("label");
    const inputPoster = document.createElement("input");
    
    divPoster.classList.add("user");
    
    labelPoster.setAttribute("for", "poster");
    inputPoster.setAttribute("id", "poster");
    inputPoster.setAttribute("type", "text");
    inputPoster.setAttribute("placeholder", "an url is needed...");

    labelPoster.textContent = "Poster: "

    divPoster.append(labelPoster, inputPoster);

    return divPoster;
}
const formDesc = () => {
    const divDesc = document.createElement("div");

    const labelDesc = document.createElement("label");
    const inputDesc = document.createElement("input");
    
    divDesc.classList.add("user");
    
    labelDesc.setAttribute("for", "description");
    inputDesc.setAttribute("id", "description");
    inputDesc.setAttribute("type", "text");
    inputDesc.setAttribute("placeholder", "what is it talking about");

    labelDesc.textContent = "A little description: "

    divDesc.append(labelDesc, inputDesc);
    return divDesc;
}
const formYear = () => {
    const divYear = document.createElement("div");    

    const labelYear = document.createElement("label");
    const inputYear = document.createElement("input");

    divYear.classList.add("user");
    
    labelYear.setAttribute("for", "year");
    inputYear.setAttribute("id", "year");
    inputYear.setAttribute("type", "text");
    inputYear.setAttribute("placeholder", "when did it was produced");

    labelYear.textContent = "Year: "

    divYear.append(labelYear, inputYear);
    return divYear;
}
const formGen = () => {
    const divGen = document.createElement("div");
    const divGenList = document.createElement("div");
    const divGenAdd = document.createElement("div");

    const labelGen = document.createElement("label");
    const inputGen = document.createElement("input");
    const btnGen = document.createElement("button");
    
    const pGen = document.createElement("p");

    pGen.textContent = "Genre: "

    divGen.classList.add("genres");

    divGenList.classList.add("check-flex");

    divGenAdd.classList.add("add-genre");

    labelGen.setAttribute("for", "other");
    inputGen.setAttribute("id", "other");
    inputGen.setAttribute("type", "text");
    inputGen.setAttribute("placeholder", "put here a new genre ...");
    btnGen.setAttribute("type", "submit");
    btnGen.setAttribute("id", "plus");

    btnGen.textContent = "+";
    labelGen.textContent = "Other ";

    divGenAdd.append(labelGen, inputGen, btnGen);

    divGen.append( pGen, divGenList, divGenAdd);

    return divGen;
}

const addForm = () => {
    const formEl = document.createElement("form");
    const btnAdd = document.createElement("button");

    btnAdd.setAttribute("id", "sub");
    btnAdd.setAttribute("type", "submit");
    btnAdd.textContent = "Add this movie";

    //  FORM
    formEl.append( formTitle(), formPoster(), formYear(), formDesc(), formGen(), btnAdd);

    try {
        genresList = localStorage.getItem("genres").split(",");
    } catch {
        genresList = ["Horror", "Action", "TVSeries"];
    }

    loadGenre(genresList);

    q(".user-add").appendChild(formEl);


    q("#sub").addEventListener("click", (event) => {
        event.preventDefault();
    
        fetch("https://edgemony-backend.herokuapp.com/movies", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(getNew()),
        }).then(() => location.reload());
    
    
        q("#title").value = "";
        q("#description").value = "";
        q("#year").value = "";
        q("#poster").value = "";

        q(".user-add").innerHTML = ``;
    });

    q("#plus").addEventListener("click", (event) => {
        event.preventDefault();    
        let genResults = [];
        const genrePlus = q("#other");
    
        if(genrePlus.value == "")
            alert("You have to insert a value!");
        else {    
            console.log(genrePlus.value);    
            genResults = addGenre(genrePlus.value, genresList);
        }
            
        localStorage.setItem("genres", genResults);
        genrePlus.value == "";
        // location.reload();
    });

}

export { q, zoomMov, createCard, getNew, getApi, deleteCard, choiceCard, loadGenre, addGenre, addForm }