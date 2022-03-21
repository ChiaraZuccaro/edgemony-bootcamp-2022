//                    ESERCITAZIONE 21-03-22
//                          NON RISOLTO

const q = (selector) => document.querySelector(selector);

const arrayObj = JSON.parse(localStorage.getItem("rubric"));
const ul = q(".person-list");
const name = q("#name");
const surname = q("#surname");
const phone = q("#phone");
const saves = q("#saves");

const visualList = () => {
    const listHTML = arrayObj.map((element) =>
        `<li> ${element.name} ${element.surname} ${element.phone} ${element.saves}</li>`
    );
    return ul.innerHTML = listHTML.join("");
};

q("#add-btn").addEventListener("click", () => {
    if (name.value !== "" && surname.value !== "" && phone.value !== "" && saves.value !== "") {
        arrayObj.push({
            name: `${name.value}`,
            surname: `${surname.value}`,
            phone: `${phone.value}`,
            saves: `${saves.value}`
        });
        console.log("aggiunto");
    } else {
        alert("You need to insert a value!");
    }
    visualList();
});

visualList();





// const rubric = [
//     {
//         name: "Robert",
//         surname: "Pattinson",
//         phone: "349-539 2541 12",
//         saves: true
//     },
//     {
//         name: "Homer",
//         surname: "Simpson",
//         phone: "375-520 5874 47",
//         saves: true
//     },
//     {
//         name: "Patrick",
//         surname: "Star",
//         phone: "385-267 4286 51",
//         saves: false
//     },
//     {
//         name: "Rick",
//         surname: "Sanchez",
//         phone: "341-456 7256 52",
//         saves: true
//     }
//     ,{
//         name: "Bojack",
//         surname: "Horseman",
//         phone: "306-465 8222 64",
//         saves: false
//     }
// ]