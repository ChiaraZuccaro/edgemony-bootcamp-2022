const characters = [
    {
        name: "Luke Skywalker",
        movie: "Star Wars",
        img: "https://bit.ly/3tksmd8",
        wiki: "https://it.wikipedia.org/wiki/Luke_Skywalker"
    },
    {
        name: "Jack Burton",
        movie: "Grosso guaio a Chinatown",
        img: "https://fandan.co/3tk8cAf",
        wiki: "https://en.wikipedia.org/wiki/Big_Trouble_in_Little_China"
    },
    {
        name: "Jhonny Silverhand",
        movie: "Cyberpunk 2077",
        img: "https://bit.ly/3NdSgYf",
        wiki: "https://cyberpunk.fandom.com/wiki/Johnny_Silverhand"
    },
    {
        name: "Bilbo Baggins",
        movie: "Signore degli anelli",
        img: "https://bit.ly/3u86QaG",
        wiki: "https://it.wikipedia.org/wiki/Bilbo_Baggins"
    },
    {
        name: "Rick Sanchez",
        movie: "Rick & Morty",
        img: "https://bit.ly/3igA3uu",
        wiki: "https://en.wikipedia.org/wiki/Rick_Sanchez"
    },
    {
        name: "Master Chief",
        movie: "Halo",
        img: "https://bit.ly/3Jmpbas",
        wiki: "https://en.wikipedia.org/wiki/Master_Chief_(Halo)"
    },
    {
        name: "Eleven",
        movie: "Stranger Things",
        img: "https://bit.ly/3InYmBA",
        wiki: "https://en.wikipedia.org/wiki/Eleven_(Stranger_Things)"
    },
    {
        name: "Bella Cullen",
        movie: "Twilight's Saga",
        img: "https://bit.ly/3MZEiJb",
        wiki: "https://en.wikipedia.org/wiki/Bella_Swan"
    },
    {
        name:"Lara Croft",
        movie:"Tomb Rider",
        img:"https://bit.ly/37wNTXC",
        wiki: "https://it.wikipedia.org/wiki/Lara_Croft"
    },
    {
        name:"R2D2",
        movie:"Star Wars",
        img:"https://bit.ly/3qgQ4F8",
        wiki: "https://it.wikipedia.org/wiki/R2-D2"
    },
    {
        name:"Spongebob Squarepants",
        movie:"Spongebob series",
        img:"https://bit.ly/3u5Lfjn",
        wiki: "https://it.wikipedia.org/wiki/SpongeBob"
    },
    {
        name:"Homer Simpson",
        movie:"The Simpsons",
        img:"https://bit.ly/3CQrJva",
        wiki: "https://it.wikipedia.org/wiki/Homer_Simpson"
    }
];

const q = (selector) => document.querySelector(selector);
const search = q("#search");


const renderList = () => {
    const characterHTML = characters.map((element) => `<li>
    <a href="${element.wiki}" target="_blank" class="cards"> 
    <div class="charac-movie">
    <h2>${element.name}</h2><span>${element.movie}</span>
    </div>
    <img width="100px" height="auto" src="${element.img}" alt="movies's img"> </a>
    </li>`);
    return q(".characters").innerHTML = characterHTML.join("");
}

q("#submit").addEventListener("click", () => {
    const searching = characters.filter((element) => element.name.toLowerCase().includes(search.value)
    || element.movie.toLowerCase().includes(search.value));
    console.log(searching);
    if (searching.length === 0) {
        q("#no-results").classList.toggle("change");
    }
    const searchingHTML = searching.map((element) => `<li class="cards">    
    <div class="charac-movie">
    <h2>${element.name}</h2><span>${element.movie}</span>
    </div>
    <img width="100px" height="auto" src="${element.img}" alt="movies's img">
    </li>`);
    q(".characters").innerHTML = searchingHTML.join("");
});


renderList();