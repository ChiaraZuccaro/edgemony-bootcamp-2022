import { q, createCard, getNew, getApi, choiceCard, loadGenre, addGenre } from "./funzioni.js";

let genresList = [];

try {
    genresList = localStorage.getItem("genres").split(",");
} catch {
    genresList.push("Horror", "TVSeries", "Fantasy", "Animation");
}

loadGenre(genresList);

const movieList = [];

getApi()
    .then((data) => {
        for ( let i = 0; i < data.length; i++) {
            movieList.push(data[i]);
        }
        console.log("salvati");

        for ( let i = 0; i < data.length; i++) {
            createCard(movieList[i]);
        }
    })
    .then(() => {
        const cardsEls = document.querySelectorAll(".all-info");

        cardsEls.forEach((card) => {
            card.addEventListener("click", () => {           
                choiceCard(card, movieList);   
            });
        });
});

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
});


q("#plus").addEventListener("click", (event) => {
    event.preventDefault();    
    let genResults = [];
    const genrePlus = q("#other");

    if(genrePlus.value == "")
        alert("Devi inserire un valore per aggiungere un genere!");
    else {    
        console.log(genrePlus.value);    
        genResults = addGenre(genrePlus.value, genresList);
    }
        
    localStorage.setItem("genres", genResults);
    location.reload();
});
