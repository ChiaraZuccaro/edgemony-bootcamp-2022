//                                    Esercitazione 16-03-2022

//                     Esercizio 1

const ul = document.querySelector("#quotes");
let HTMLQuotes = [];
const quotes = [
    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
];

const addQuote = (index) => {
    HTMLQuotes = quotes.map((element, i) => HTMLQuotes[i] = `<li>" ${element} "</li>`);
    const cit = HTMLQuotes[index];
    return ul.innerHTML = cit;
};

document.querySelector("button").addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    addQuote(random);
});





//                     Esercizio 2
const userList = document.querySelector("#name");
const emailList = document.querySelector("#email");
const text = document.querySelector("#text");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");
const comments = [];
const user = [];
const email = [];

const renderComments = () => {
    const userHTML = user.map((user) => `<h4>${user}</h4>`);
    const emailHTML = email.map((mail) => `<h5>${mail}</h5>`);
    const commentHTML = comments.map((comment) => `<p>${comment}</p>`);

    const strname = userHTML.join("");
    const strmail = emailHTML.join("");
    const strcom = commentHTML.join("");

    commentsList.innerHTML = `${strname} ${strmail} ${strcom}`;
};

submit.addEventListener("click", () => {
    user.push(userList.value);
    email.push(emailList.value);
    comments.push(text.value);
    renderComments();
});
