/*
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
 */

// ------------------------------------------------------ dichiarazioni elementi della dom
const boxNumberCasual = document.querySelector('.number_casual');


// creiamo un array con all'interno 5 numeri casuali
let casualNumber = [];

generateRandomNumber(100, 1)
for (i = 0; i < casualNumber.length; i++) {
    thisNumb = casualNumber[i]
    console.log(thisNumb)
    boxNumberCasual.innerHTML += (`<span clas="px-1">${thisNumb}</span>`)

}

    // richiamiamo la funzione per generare 5 numeri casuali
// creiamo una funzoine che faccia vedere per 30 secondi i numeri nella dom





















// ------------------------------------------------------ FUNZIONI


// creo una funzione per generare 5 numeri casuali
function generateRandomNumber(max, min) {
    let n = 0
    while (casualNumber.length < 5) {
        numbRandom = Math.ceil(Math.random() * (max - min + 1)) + min;
        if (!casualNumber.includes(numbRandom)) {
            casualNumber.push(numbRandom)
        }
        n++
    }

}

