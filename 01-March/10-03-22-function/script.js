//             ESERCITAZIONE 10-03-2022

//                                        Primo esercizio
const firstContact = {
    name: "Robert",
    surname: "Pattinson",
    cellphone: "344-006 689 12",
    saves: false,
};

const secondContact = {
    name: "Kristen",
    surname: "Stewart",
    cellphone: "379-120 530 50",
    saves: true,
};

const thirdContact = {
    name: "Max",
    surname: "Payne",
    cellphone: "350-689 570 43",
    saves: false,
};

const fourthContact = {
    name: "Lara",
    surname: "Croft",
    cellphone: "326-905 436 25",
    saves: true,
};

const fifthContact = {
    name: "Deacon",
    surname: "John",
    cellphone: "376-950 423 46",
    saves: true,
};

const rubric = [firstContact, secondContact, thirdContact, fourthContact, fifthContact];







//                                      Secondo esercizio
// let result;
// let num1, num2, operation;

// num1 = parseInt(prompt("Inserisci il primo numero"));
// num2 = parseInt(prompt("Inserisci il secondo"));
// operation = prompt("Che operazione vuoi eseguire? Scegli tra: moltiplica, somma, sottrai, dividi, resto");

// function calc (val1, val2, operation) {
    
//     switch (operation) {
//         case 'moltiplica':
//             result = val1 * val2;
//             break;
//         case 'somma':
//             result = val1 + val2;
//             break;
//         case 'sottrai':
//             result = val1 - val2;
//             break;
//         case 'dividi':
//             result = val1 / val2;
//             break;
//         case 'resto':
//             result = val1 % val2;
//             break;
//         default:
//             return "Inserisci un'operazione esistente!";
//     }
//         return result + " è ciò che cercavi";
// }

// console.log(calc(num1, num2, operation));





//                                          Avanzato
function addContact (obj, array, index) {
    let answ;
    for (let i = 0; i < array.length; i++) {
        if (i == index) {
            // let str;
            // str = JSON.stringify(arr[obj.name]);
            answ = prompt("Posizione trovata, vuoi che il nuovo contatto sostituisca" + array[i] + " ? yes/no" );
            if (answ == 'yes') {
                array.splice(index, 1, obj);
            }
            else {
                array.splice(index, 0, obj);
            }            
            return array;
        }
    }
    answ = prompt("Posizione non trovata, lo inserisco in fondo? yes/no");
    if (answ == 'yes') {
        array.push(obj);
    }
    else {
        alert("Il tuo contatto non è stato inserito.");
    }
    return array;
}
function questionAdd (obj, array) {
    let index;
    let ans;

    obj.name = prompt("Nuovo contatto! Inserisci il nome: ");
    obj.surname = prompt("Adesso il cognome: ");
    obj.cellphone = prompt("Numero telefonico: ");
    ans = prompt("Lo vuoi inserire tra i preferiti? yes/no ");
    ans == 'yes' ? obj.saves = true : obj.saves = false;
    index = prompt("Dove vuoi posizionarlo? Indica un numero partendo da zero");

    array = addContact(obj, array, index);
}


function deleteContact (array, index) {
    let answ;
    for (let i = 0; i < array.length; i++) {
        if (i == index) {
            answ = prompt("Sei sicuro di voler eliminare" + array[i] + " ? yes/no");
            answ == 'yes' ? array.splice(index, 1) : alert("Il contatto non è stato eliminato");
            return array; // update array
        }
    }
    alert("Indice non trovato!");
    return array;
}
function questionDelete (array) {
    let index;

    index = prompt("Inserisci la posizione del contatto che vuoi eliminare: ");

    array = deleteContact(array, index);
}

// fine funzioni

const newContact = {
    name: "",
    surname: "",
    cellphone: "",
    saves: ""
};
let action;

alert("Benvenuto nella tua rubrica! ");
action = prompt("Puoi aggiungere o eliminare i contatti, digita: add oppure delete");
(action == 'add') ? questionAdd(newContact, rubric) : 
(action == 'delete') ? questionDelete(rubric) : 
alert("Hai inserito valori non validi, ritenta!");

alert("Trovi la tua rubrica in console");
console.log(rubric);