const char = q("#name");
const movie = q("#movie");
const url = q("#url");

const addCharacter = 

q("#plus").addEventListener("click", () => {
    if (char.value !== "" || movie.value !== "" || url.value !== "") {
        characters.push({
            name: `${char.value}`,
            movie: `${movie.value}`,
            img: `${url.value}`
        });
    } else {
        alert("You need to insert a value!");
    }

    console.log("Add");
    
    renderList();
});