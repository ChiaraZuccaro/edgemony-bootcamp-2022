const char = q("#name");
const movie = q("#movie");
const url = q("#url");
const wiki = q("#wiki");

const addCharacter = 

q("#plus").addEventListener("click", () => {
    if (char.value !== "" || movie.value !== "" && url.value !== "" && wiki.value !== "") {
        characters.push({
            name: `${char.value}`,
            movie: `${movie.value}`,
            img: `${url.value}`,
            wiki: `${wiki.value}`
        });
    } else {
        alert("You need to insert a value!");
    }

    console.log("Add");
    
    renderList();
});