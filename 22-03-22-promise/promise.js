//                           ESERCITAZIONE 22-03-2022


// let val1, val2 = 0;
// let result;
// const newValue = () => {    
//     val1 = parseInt(prompt("Inserisci il primo valore: "));
//     val2 = parseInt(prompt("Adesso il secondo: "));
//     result = val1 + val2;


//     return result;
// }
// newValue()


//         Utilizzo di setTimeout
// const timeOut = setTimeout(() => console.log(result), 10000);

// document.querySelector("#btn-stop").addEventListener("click", () => {
//     clearTimeout(timeOut);
// });



//          Utilizzo di setInterval

// const interval = setInterval(() => {   
//     console.log(result);
// }, 10000);

// document.querySelector("#btn-stop").addEventListener("click", () => {
//     clearInterval(interval);
// });



//                              AVANZATO


const q = (selector) => document.querySelector(selector);
const search = q("#search");

const createCard = (name, height, gender, homeworld) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const p1El = document.createElement("p");
    const p2El = document.createElement("p");
    const p3El = document.createElement("p");
  
    h3El.textContent = name;
    p1El.textContent = height;
    p2El.textContent = gender;
    p3El.textContent = homeworld;
  
    divEl.append(h3El, p1El, p2El, p3El);
    document.body.appendChild(divEl);
};

fetch("https://swapi.dev/api/people/") // Funzione che ritorna una promise!
    .then((res) => res.json())
        .then((data) =>
            data.map(
                ({ name, height, gender, homeworld }) => {
                createCard(name, height, gender, homeworld);

                localStorage.setItem("data", JSON.stringify(data));
                }
                )
);