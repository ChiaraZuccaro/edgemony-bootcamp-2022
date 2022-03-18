const characters = [
    {
        name: "Luke Skywalker",
        movie: "Star Wars",
        img: "https://bit.ly/3tksmd8"
    },
    {
        name: "Jack Burton",
        movie: "Grosso guaio a Chinatown",
        img: "https://fandan.co/3tk8cAf"
    },
    {
        name: "Jhonny Silverhad",
        movie: "Cyberpunk 2077",
        img: "https://bit.ly/3NdSgYf"
    },
    {
        name: "Bilbo Baggins",
        movie: "Signore degli anelli",
        img: "https://bit.ly/3u86QaG"
    },
    {
        name: "Rick Sanchez",
        movie: "Rick & Morty",
        img: "https://bit.ly/3igA3uu"
    },
    {
        name: "Master Chief",
        movie: "Halo",
        img: "https://bit.ly/3Jmpbas"
    },
    {
        name: "Eleven",
        movie: "Stranger Things",
        img: "https://bit.ly/3InYmBA"
    },
    {
        name: "Bella Cullen",
        movie: "Twilight's Saga",
        img: "https://bit.ly/3MZEiJb"
    },
    {
        name:"Lara Croft",
        movie:"Tomb Rider",
        img:"https://bit.ly/37wNTXC"
    },
    {
        name:"R2D2",
        movie:"Star Wars",
        img:"https://bit.ly/3qgQ4F8"
    },
    {
        name:"Spongebob Squarepants",
        movie:"Spongebob series",
        img:"https://bit.ly/3u5Lfjn"
    },
    {
        name:"Homer Simpson",
        movie:"The Simpsons",
        img:"https://bit.ly/3CQrJva"
    }
];

const q = (selector) => document.querySelector(selector);
const search = q("#search");


const renderList = () => {
    const characterHTML = characters.map((element) => `<li class="cards">    
    <div class="charac-movie">
    <h2>${element.name}</h2><span>${element.movie}</span>
    </div>
    <img width="100px" height="auto" src="${element.img}" alt="movies's img">
    </li>`);
    return q(".characters").innerHTML = characterHTML.join("");
}

q("#submit").addEventListener("click", () => {
    const searching = characters.filter((element) => element.name.toLowerCase().includes(search.value));
    console.log(searching);
    if (searching.length === 0) {
        q("#no-results").classList.add("change");
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