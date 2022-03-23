import { createCard, getApi, q, removeCard } from "./commerce.js"; 

const productList = [];
getApi().then((data) => {
    for(let i = 0; i < data.length; i++) {
        productList.push(data[i]);
    }
    console.log("caricati");
});

setTimeout(() => {
    for (let i = 0; i < productList.length; i++) {    
        createCard(productList[i]);
    }
}, 5000)


//                            CONSEGNA RICHIESTA


// const deleteCard = (card) => {
//     card.innerHTML = `<h2 class="erased">Prodotto cancellato</h2>`;
//     console.log(card);
//     setTimeout(() => {
//         q(".wrapper").removeChild(card);
//     }, 2000);
// };

// setTimeout(() => {
//     const cardsEls = document.querySelectorAll(".cards");
//     console.log(cardsEls);
//     cardsEls.forEach((card) => { card.addEventListener("click", () => deleteCard(card))});
// } , 5000);





//                           A PIACERE
const men = q("#men");
const women = q("#women");
const electronics = q("#electronics");
const jewelery = q("#jewe");
const btn = q("#back");


men.addEventListener("click", () => {
    removeCard();
    q("#back").classList.add("on");

    const menList = productList.filter((product) => product.category === "men's clothing");
    for (let i = 0; i < productList.length; i++) {    
        createCard(menList[i]);
    }
});

women.addEventListener("click", () => {
    removeCard();
    q("#back").classList.add("on");

    const womenList = productList.filter((product) => product.category === "women's clothing");
    for (let i = 0; i < productList.length; i++) {    
        createCard(womenList[i]);
    }
});

electronics.addEventListener("click", () => {
    removeCard();
    q("#back").classList.add("on");

    const electronicsList = productList.filter((product) => product.category === "electronics");
    for (let i = 0; i < productList.length; i++) {    
        createCard(electronicsList[i]);
    }
});

jewelery.addEventListener("click", () => {
    removeCard();
    q("#back").classList.add("on");

    const jeweleryList = productList.filter((product) => product.category === "jewelery");
    for (let i = 0; i < productList.length; i++) {    
        createCard(jeweleryList[i]);
    }
});

btn.addEventListener("click", () => {    
    removeCard();

    for (let i = 0; i < productList.length; i++) {    
        createCard(productList[i]);
    }

    q("#back").classList.remove("on");
});