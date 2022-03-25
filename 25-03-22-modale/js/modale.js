import { q, zoomMov, createCard, getNew, getApi, deleteCard, choiceCard } from "./funzioni.js";

let indexMovie;

getApi()
    .then((data) => data.map((movie) => {
        createCard(movie);
    }))
    .then(() => {
        const cardsEls = document.querySelectorAll(".cards");
        cardsEls.forEach((card) => { 
            card.addEventListener("click", () => {
                choiceCard(card);
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


