const inputRemove = q("#search");
const output = q("#output");
const btn = q("#rem-btn");
const radioButtons = document.querySelectorAll('input[name="rem"]');

const deleteQuestion = (obj) => {
    const liEl = document.createElement("li");
    const p = document.createElement("p");

    let name;
    let surname;

    obj.map((person) => {
        name = person.name;
        surname = person.surname;
    });

    console.log(name);
    p.textContent = `Sei sicuro di voler eliminare ${name} ${surname} ?`;

    liEl.append(p);
    q("#list-remove").appendChild(liEl);

    return liEl;
}

const newList = () => {
    const searchList = arrayObj.filter((person) => person.name.toLowerCase().includes(inputRemove.value.toLowerCase()));
    console.log(searchList);

    if (searchList.length > 0) {
        const li = deleteQuestion(searchList);

        document.getElementById("rem-check").classList.add("on");


        btn.addEventListener("click", () => {            
            q("#list-remove").removeChild(li);
            let ans;
            for (const radioButton of radioButtons ) {
                if (radioButton.checked) {
                    ans = radioButton.value;
                    break;
                }
            };
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
                setTimeout(() => q("#output").textContent = "", 4000);
                
                visualList();
                localStorage.setItem("rubric", JSON.stringify(arrayObj));
            } else {
                q("#output").textContent = "Non hai rimosso nulla";
                setTimeout(() => q("#output").textContent = "", 4000);
            }
        })
    } else {
        alert("Contatto non trovato!");
    }
    
}


q("#remove-btn").addEventListener("click", () => { 
    setTimeout(() => fieldResetRemove(), 100); 
    if (inputRemove.value !== "") {
        newList();        
    }
    else {
        alert("Non hai inserito i valori correttamente!");
    }
    
    inputRemove.value = "";

    visualList();
});
