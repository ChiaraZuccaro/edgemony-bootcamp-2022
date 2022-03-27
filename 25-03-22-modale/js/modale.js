import { q, createCard, getNew, getApi, choiceCard } from "./funzioni.js";

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


