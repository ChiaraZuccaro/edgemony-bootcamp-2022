//                                   ESERCITAZIONE 23-03-22

const q = (selector) => document.querySelector(selector);

const formatMinText = (text) => text.split(" ").slice(0, 20).join(" ") + " ...";

const createCard = (product) => {
    const h3El = document.createElement("h3");
    const descEl = document.createElement("p");
    const imgEl = document.createElement("img");
    // const ratingEl = document.createElement("p");
    const categoryEl = document.createElement("h6");
    const priceEl = document.createElement("h5");
    const divEl = document.createElement("div");

    h3El.textContent = `${product.title}`;
    categoryEl.textContent = `${product.category.toUpperCase()}`;
    descEl.textContent = `${formatMinText(product.description)}`;
    // ratingEl.textContent = `${product.rating}`;
    priceEl.textContent = `${product.price} $`;

    imgEl.setAttribute("src",`${product.image}`);
    imgEl.setAttribute("width","100px");
    imgEl.setAttribute("height","auto");
    imgEl.setAttribute("alt","product's image");

    divEl.append(h3El, categoryEl, descEl, imgEl, priceEl);
    divEl.classList.add("cards");

    q(".wrapper").appendChild(divEl);
};

const getApi = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
};

export { createCard, getApi, q };