//                    ESERCITAZIONE 21-03-22
     
// const rubric = [
//         {
//             name: "Robert",
//             surname: "Pattinson",
//             phone: "349-539 2541 12",
//             saves: "./star-with-five-points.png"
//         },
//         {
//             name: "Homer",
//             surname: "Simpson",
//             phone: "375-520 5874 47",
//             saves: "./star-with-five-points.png"
//         },
//         {
//             name: "Patrick",
//             surname: "Star",
//             phone: "385-267 4286 51",
//             saves: ""
//         },
//         {
//             name: "Rick",
//             surname: "Sanchez",
//             phone: "341-456 7256 52",
//             saves: "./star-with-five-points.png"
//         }
//         ,{
//             name: "Bojack",
//             surname: "Horseman",
//             phone: "306-465 8222 64",
//             saves: ""
//         }
//     ]
const q = (selector) => document.querySelector(selector);

const arrayObj = JSON.parse(localStorage.getItem("rubric"));
const radioSaves = document.querySelectorAll('input[name="saves"]');
const ul = q(".person-list");
const name = q("#name");
const surname = q("#surname");
const phone = q("#phone");

const visualList = () => {
    const listHTML = arrayObj.map((element) =>
        `<li class="cards"><span>${element.name} ${element.surname}</span> <br> ${element.phone} <img src="${element.saves}"></li>`
    );
    return ul.innerHTML = listHTML.join("");
};

function fieldResetSaves() {
    let ele = document.getElementsByName("saves");

    for(let i=0; i < ele.length; i++) {        
        ele[i].checked = false;
    }
}
function fieldResetRemove() {
    let ele = document.getElementsByName("rem");

    for(let i=0; i < ele.length; i++) {        
        ele[i].checked = false;
    }
}

q("#add-btn").addEventListener("click", () => {
    setTimeout(() => fieldResetSaves(), 100);
    if (name.value !== "" && surname.value !== "" && phone.value !== "") {
        let ans;
        for (const radioSave of radioSaves) {
            if(radioSave.checked) {
                ans = radioSave.value;
                break;
            }
        }
        if(ans === "true") {            
            arrayObj.push({
                name: `${name.value}`,
                surname: `${surname.value}`,
                phone: `${phone.value}`,
                saves: `./star-with-five-points.png`
            });
        } else {
            console.log(ans);
            arrayObj.push({
                name: `${name.value}`,
                surname: `${surname.value}`,
                phone: `${phone.value}`,
                saves: ``
            });
        }
        console.log("aggiunto");
        localStorage.setItem("rubric", JSON.stringify(arrayObj));
        console.log("anche in storage");
    } else {
        alert("Devi inserire dei valori");
    }

    name.value = "";
    surname.value = "";
    phone.value = "";
    


    visualList();
});

visualList();