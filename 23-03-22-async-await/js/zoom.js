import { productList, q } from "./commerce.js";

const zoomProd = (card) => {
    q("nav").style.opacity = 0.1;
    q("header").style.opacity = 0.1;
    q(".wrapper").style.opacity = 0.1;
    q(".all").innerHTML = `${card.outerHTML} <button id="btn-zoom">Chiudi</button>`;    
    q(".all").classList.remove("hidden");
    
    for (let i = 0; i < productList.length; i++) {
        // console.log("gira la ruota");
        // console.log(card.outerHTML.toLowerCase());
        // console.log(productList[i].title.toLowerCase());
        // console.log(card.outerHTML.toLowerCase().includes(productList[i].title.toLowerCase()));
        if (card.outerHTML.toLowerCase().includes(productList[i].title.toLowerCase())) {
            console.log("condizione");
            q(".all .cards p").textContent = productList[i].description;
            break;
        }
    }

    q("#btn-zoom").addEventListener("click", () => {
        q(".all").classList.add("hidden");
        q(".all").innerHTML = "";
        q(".wrapper").style.opacity = 1;
        q("nav").style.opacity = 1;
        q("header").style.opacity = 1;
    });
}

setTimeout(() => {
    const cardsEls = document.querySelectorAll(".cards");
    console.log(cardsEls); //check
    cardsEls.forEach((card) => { card.addEventListener("click", () => zoomProd(card))});
} , 10100);