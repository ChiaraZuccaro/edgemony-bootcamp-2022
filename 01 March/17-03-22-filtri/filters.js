const q = (selector) => document.querySelector(selector);
const search = q("#search");
const movies = [
    {
        name: "Deadpool",
        img: "https://bit.ly/3JmJuon"
    },
    {
        name: "Dune",
        img: "https://bit.ly/3N2NJb0"
    },
    {
        name: "Grosso guaio a Chinatown",
        img: "https://fandan.co/3tk8cAf"
    },
    {
        name: "V per vendetta",
        img: "https://bit.ly/37FH5qT"
    },
    {
        name: "Pulp Fiction",
        img: "https://bit.ly/3JmX7nh"
    },
    {
        name: "Signore degli anelli",
        img: "https://bit.ly/3u86QaG"
    },
    {
        name: "Scarface",
        img: "https://bit.ly/3qfvyoq"
    },
    {
        name: "Sharknado (1,2,3,4,5 e 6)",
        img: "https://bit.ly/3w9YB0C"
    },
    {
        name: "Blade Runner",
        img: "https://bit.ly/3KPD6WX"
    },
];


const renderList = () => {
    const movieHTML = movies.map((element) => `<li>
    <img width="100px" height="auto" src="${element.img}" alt="movies's img"> <span>${element.name}</span></li>`);
    return q(".films").innerHTML = movieHTML.join("");
}


q("#submit").addEventListener("click", () => {
    const searching = movies.filter((element) => element.name.toLowerCase().includes(search.value));
    console.log(searching);
    if (searching.length === 0) {
        q("#no-results").classList.add("change");
    }
    const searchingHTML = searching.map((element) => `<li class="find"> <span>${element.name}</span> <img width="100px" height="auto" src="${element.img}" alt="movies's img"></li>`);
    q(".films").innerHTML = searchingHTML.join("");
});
renderList();
