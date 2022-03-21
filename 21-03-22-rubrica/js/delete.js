const inputRemove = q("#search");
const output = q("#output");
const btn = q(".rem-btn");
const radioButtons = document.querySelectorAll('input[name="rem"]');

const newList = () => {
    const searchList = arrayObj.filter((person) => person.name.toLowerCase().includes(inputRemove.value));   
        
    const searchListHTML = searchList.map((person) =>
        `<li>
        <p>Sei sicuro di voler eliminare ${person.name} ${person.surname} ?</p>
        <div id="radio">
            <label for="rem-yes">Si</label>
            <input type="radio" id="rem-yes" name="rem" value="yes">
            <label for="rem-no">No</label>
            <input type="radio" id="rem-no" name="rem" value="no">
        </div>            
        </li>`
    );

    return searchListHTML.join("");
}


q("#remove-btn").addEventListener("click", () => {
    if (inputRemove.value !== "") {
        q(".list-remove").innerHTML = newList();
        q("#rem-check").classList.toggle("on");
        btn.addEventListener("click", () => {
            let ans;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    ans = radioButton.value;
                    break;
                }
            }
            console.log(ans);
        });
    }
    else {
        alert("Non hai inserito i valori correttamente!");
    }
    
    visualList();
});
