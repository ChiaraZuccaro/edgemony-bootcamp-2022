//   ESERCITAZIONE 08/03/2022

let val1 = parseInt(prompt("Inserisci un valore"));
let val2 = parseInt(prompt("Inseriscine un altro"));
let operation = prompt("Cosa vuoi farne?");

// Primo metodo
/*switch (operation) {
    case 'moltiplica':
        alert(val1 * val2 + ' è il tuo risultato');
        break;
    case 'somma':
        alert(val1 + val2 + ' è il tuo risultato');
        break;
    case 'sottrai':
        alert(val1 - val2 + ' è il tuo risultato');
        break;
    case 'dividi':
        alert(val1 / val2 + ' è il tuo risultato');
        break;
    case 'resto':
        alert(val1 % val2 + ' è il tuo risultato');
        break;
    default:
        alert("Inserisci un'operazione esistente, scegli tra: moltiplica, somma, sottrai, dividi, resto");
        break;
} */


// Secondo metodo
/*if (operation == 'moltiplica') {
    alert(val1 * val2 + ' è quello che cercavi');
} else if (operation == 'somma'){
    alert(val1 + val2 + ' è quello che cercavi');
} else if (operation == 'sottrai'){
    alert(val1 - val2 + ' è quello che cercavi');
} else if (operation == 'dividi') {
    alert(val1 / val2 + ' è quello che cercavi');
} else if (operation == 'resto') {
    alert(val1 % val2 + ' è quello che cercavi');
} else {
    alert("Inserisci un'operazione esistente, scegli tra: moltiplica, somma, sottrai, dividi, resto");
}*/


// Terzo metodo
operation == 'moltiplica' ? alert('Il tuo risultato è ' + (val1 * val2)) : 
operation == 'sottrai' ? alert('Il tuo risultato è ' + (val1 - val2)) :
operation == 'dividi' ? alert('Il tuo risultato è ' + (val1 / val2)) :
operation == 'somma' ? alert('Il tuo risultato è ' + (val1 + val2)) :
operation == 'resto' ? alert('Il tuo risultato è ' + (val1 % val2)) :
alert("Inserisci un'operazione valida, scegli tra: moltiplica, somma, sottrai, dividi, resto");