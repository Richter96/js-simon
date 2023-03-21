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
const allInputEl = 

// aggiungiamo classi ad elementi della dom
document.querySelector('.number_casual').classList.add('d-flex', 'justify-content-center', 'align-items-center')

// creiamo un array con all'interno 5 numeri casuali
let casualNumber = [];

// Diamo una funzione al tasto play per generare 5 numeri casuali
btnPlay.addEventListener('click', function() {
    boxNumberCasual.innerHTML = ""
    const casualNumber = generateRandomNumber(10, 1)
    for (i = 0; i < casualNumber.length; i++) {
        thisNumb = casualNumber[i]
        console.log(thisNumb)
        boxNumberCasual.innerHTML += (`<span class="px-3 fs-1">${thisNumb}</span>`)
    }
})

// richiamiamo la funzone per generare i numeri


    // richiamiamo la funzione per generare 5 numeri casuali
// creiamo una funzoine che faccia vedere per 30 secondi i numeri nella dom









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
    return(casualNumber)

}


function takeNumbToUser() {
 // array dei numeri dell'user
  let arreyUser = []

  while (arreyUser.length < )

}

