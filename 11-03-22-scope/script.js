//                   Esercitazione 11-03-2022

// Esercizio 1
// Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
/* RISPOSTA: Il risultato stampato sarà due volte 3.14, la prima volta dalla riga 10 e 
             la seconda dalla 13 perchè PI rispetta la condizione dell'if*/

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}



// Esercizio 2
// Dato il seguente, qual'è il risultato dei console.log?
/* RISPOSTA: Visto che le variabili sono dichiarate nello scope globale e visto che favColour è sovrascritto dallo stesso valore iniziale, i 
             console.log visualizzati saranno rispettivamente "Il mio colore preferito è violet" e "Ci sono 12 mesi in un anno"*/

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");





// Esercizio 3
// Dato il seguente, qual'è il risultato dei console.log?
/* RISPOSTA: Nel momento in cui la funzione verrà invocata, nella console verrà visualizzato "Sugo di pomodoro freschissimo, rucola, 
             prosciutto crudo e scaglie di grana". Successivamente quando si uscirà dalla funzione, in corrispondenza del successivo console.log
             verrà dato un errore di non riconoscimento variabile perché la variabile theSecond è stata inizializzata solo a livello locale
             all'interno della funzione.*/

function makePizza(moreIngredients) {
    let theSecond = "Sugo di pomodoro freschissimo";
    // { ... }
    console.log(theSecond + ", " + moreIngredients);
    return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}
  
if (true) {
    makePizza("rucola, prosciutto crudo e scaglie di grana.");
    console.log("Il secondo ingrediente necessario: ", theSecond);
}