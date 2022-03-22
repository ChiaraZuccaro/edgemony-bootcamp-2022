const inputRemove = q("#search");
const output = q("#output");
const btn = q("#rem-btn");
const radioButtons = document.querySelectorAll('input[name="rem"]');

const newList = () => {
    const searchList = arrayObj.filter((person) => person.name.toLowerCase() == inputRemove.value);
    console.log(searchList);
    const searchListHTML = searchList.map((person) =>
        `<li>
        <p>Sei sicuro di voler eliminare ${person.name} ${person.surname} ?</p>            
        </li>`
    );
    document.getElementById("rem-check").classList.add("on");
    q(".list-remove").innerHTML = searchListHTML.join("");
    btn.addEventListener("click", () => {
        let ans = 0;
        for (const radioButton of radioButtons ) {
            if (radioButton.checked) {
                ans = radioButton.value;
                break;
            }
        }
        document.getElementById("rem-check").classList.remove("on");
        if (ans == "Yes") {

            for(let i = 0; i < arrayObj.length; i++) {
                console.log("dentro il for");
                if (arrayObj[i].name == searchList[0].name) {
                    arrayObj.splice(i, 1);
                    console.log(i, "index");
                }
            }
            
            q("#output").textContent = "Hai rimosso il contatto con successo!";
            setTimeout(() => q("#output").textContent = "", 6000);
            visualList();
            localStorage.setItem("rubric", JSON.stringify(arrayObj));
        } else {
            q("#output").textContent = "Non hai rimosso nulla";
            setTimeout(() => q("#output").textContent = "", 6000);
        }
        q(".list-remove").textContent = "";
    });
}


q("#remove-btn").addEventListener("click", () => {  
    if (inputRemove.value !== "") {
        newList();        
    }
    else {
        alert("Non hai inserito i valori correttamente!");
    }
    
    inputRemove.value = "";

    visualList();
});
