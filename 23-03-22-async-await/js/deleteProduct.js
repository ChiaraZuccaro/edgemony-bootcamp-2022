import { createCard, getApi, q } from "./commerce.js"; 

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
}, 3000)


//                            CONSEGNA RICHIESTA


// const deleteCard = (card) => {
//     card.innerHTML = "<p>Prodotto cancellato</p>";
//     console.log(card);
//     setTimeout(() => {
//         q(".wrapper").removeChild(card);
//     }, 2000);
// };

// setTimeout(() => {
//     const cardsEls = document.querySelectorAll(".cards");
//     console.log(cardsEls);
//     cardsEls.forEach((card) => { card.addEventListener("click", () => deleteCard(card))});
// } , 3000);





//                           A PIACERE
const men = q("#men");
const women = q("#women");
const electronics = q("#electronics");
const jewelery = q("#jewe");


men.addEventListener("click", () => {
    const menList = productList.filter((product) => product.category !== "men's clothing");
    const cardsEls = document.querySelectorAll(".cards");
});