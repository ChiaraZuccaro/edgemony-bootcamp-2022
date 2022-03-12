//               ESERCITAZIONE 09-03-2022

let ourArray;
let sum = 0;
let less = 0;
let multi = 1;


/*
let average;
let ourArray = [ 13, 5, 20, 9, 18];

for (let i = 0; i < ourArray.length; i++) {
    sum += ourArray[i];
}
average = sum/(ourArray.length + 1);
console.log(average + ' è la media');

ourArray.push(average);
console.log(ourArray); */


// AVANZATO

let stringArray = prompt("Costruisci il tuo array! Inserisci almeno 4 valori separandoli con una virgola:");
ourArray = stringArray.split(',');

if (ourArray instanceof Array && ourArray.length >= 4) {
    let operation = prompt("Cosa vuoi far fare tra loro? Scegli tra: somma, sottrai, dividi, moltiplica, media");
    switch (operation) {
        case 'somma':
            for (let i = 0; i < ourArray.length; i++) {
                ourArray[i] = parseInt(ourArray[i]);
                sum += ourArray[i];
            }
            alert(sum + " è la tua somma, in console il tuo array aggiornato");
            ourArray.push(sum);
            console.log(ourArray);
        break;
    
        case 'sottrai':
            for (let i = 0; i < ourArray.length; i++) {
                ourArray[i] = parseInt(ourArray[i]);
                less -= ourArray[i];
            }
            alert(less + " è la tua sottrazione, in console il tuo array aggiornato");
            ourArray.push(less);
            console.log(ourArray);
        break;
    
        case 'dividi':
            for (let i = 0; i < ourArray.length; i++) {
                ourArray[i] = parseInt(ourArray[i]);
                multi /= ourArray[i];
            }
            alert(multi + " è il totale delle divisioni, in console il tuo array aggiornato");
            ourArray.push(multi);
            console.log(ourArray);
        break;
    
        case 'moltiplica':
            for (let i = 0; i < ourArray.length; i++) {
                ourArray[i] = parseInt(ourArray[i]);
                multi *= ourArray[i];
            }
            alert(multi + " è il totale delle moltiplicazioni, in console il tuo array aggiornato");
            ourArray.push(multi);
            console.log(ourArray);
        break;

        case 'media':
            for (let i = 0; i < ourArray.length; i++) {
                ourArray[i] = parseInt(ourArray[i]);
                sum += ourArray[i];
            }
            alert(sum/(ourArray.length + 1) + ' è la tua media!');
            
            alert("Nella console troverai l'array aggiornato");
            console.log(ourArray);
        break;
    }
} else {
    alert("Non hai seguito le regole, ripeti!");
}