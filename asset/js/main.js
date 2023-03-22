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
let boxNumberCasual = document.querySelector('.number_casual');
const btnPlay = document.querySelector('.play')
const btnVerifica = document.querySelector('.check')


// aggiungiamo classi ad elementi della dom
document.querySelector('.number_casual').classList.add('d-flex', 'justify-content-center', 'align-items-center')

// creiamo un array con all'interno 5 numeri casuali
let casualNumber = [];
let arrayUserNumber = []
// Diamo una funzione al tasto play per generare 5 numeri casuali
btnPlay.addEventListener('click', function () {

    //reset box number
    boxNumberCasual.innerHTML = ""
    // richiamiamo la funzone per generare i numeri
    const casualNumber = generateRandomNumber(10, 1)
    console.log(casualNumber)
    // funzione per nascondere i numeri
    setTimeout(dNone, 2900)
    // funzione di chiedere i numeri all'utente
    setTimeout(promptUserNumber, 3000)

})

// diamo funzione al tasto verifica
btnVerifica.addEventListener('click', function () {
    const numeriGiusti = verifica(arrayUserNumber, casualNumber)
    console.log(numeriGiusti)
})












// ------------------------------------------------------ FUNZIONI


// creo una funzione per generare 5 numeri casuali


function generateRandomNumber(max, min) {
    // creiamo un array con all'interno 5 numeri casuali
    let casualNumber = [];

    while (casualNumber.length < 5) {
        numbRandom = Math.ceil(Math.random() * (max - min + 1)) + min;
        if (!casualNumber.includes(numbRandom)) {
            casualNumber.push(numbRandom)
        }
    }
    for (i = 0; i < casualNumber.length; i++) {
        thisNumb = casualNumber[i]
        // console.log(thisNumb)
        boxNumberCasual.innerHTML += (`<span class="px-3 fs-1">${thisNumb}</span>`)
    }
    return (casualNumber)
}

function dNone() {
    boxNumberCasual.classList.add('d-none')
}

function promptUserNumber() {
    let arrayUserNumber = []
    while (arrayUserNumber.length < 5) {
        const userNumber = Number(prompt('inserisci i numeri appena visti'))
        if (!arrayUserNumber.includes(userNumber)) {
            arrayUserNumber.push(userNumber)
        } else {
            alert('numero gia inserito!!!')
        }
    }
    console.log(arrayUserNumber)
    return (arrayUserNumber)
}

function verifica(arrayUserNumber, casualNumber) {
    const numGiusti = []

    for (i = 0; i < arrayUserNumber.length; i++) {
        thisarra1 = array1[i]
        if (thisarra1.includes(casualNumber)) {
            numGiusti.push(thisarra1)
        }
    }
    console.log(numGiusti)
    return (numGiusti)
}