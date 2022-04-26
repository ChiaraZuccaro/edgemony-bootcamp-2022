export const getFetch = async () => {
    const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        }
    })
    const data = await res.json();
    console.log(data);
    return data;
}