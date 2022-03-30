import { q, createCard, getApi, choiceCard, addForm } from "./funzioni.js";

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


q("#add-nav").addEventListener("click", () => {
    addForm();
});