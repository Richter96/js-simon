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
const boxinput = document.querySelector('.input_numb');

const btnPlay = document.querySelector('.play')


// aggiungiamo classi ad elementi della dom
document.querySelector('.number_casual').classList.add('d-flex', 'justify-content-center', 'align-items-center')

// creiamo un array con all'interno 5 numeri casuali
let casualNumber = [];
let userNumber = []
// Diamo una funzione al tasto play per generare 5 numeri casuali
btnPlay.addEventListener('click', function () {
    dNone(btnPlay)
    //reset box number
    boxNumberCasual.innerHTML = ""
    // richiamiamo la funzone per generare i numeri
    casualNumber = generateRandomNumber(100, 1)
    console.log(casualNumber)
    // funzione per nascondere i numeri
    // funzione di chiedere i numeri all'utente
    setTimeout(() => {
        dNone(boxNumberCasual)
        setTimeout(() => {
            promptUserNumber(userNumber)
            console.log(userNumber)
            verifica(userNumber, casualNumber)
        }, 100);

    }, 3000);
})











// ------------------------------------------------------ FUNZIONI


// creo una funzione per generare 5 numeri casuali


function generateRandomNumber(max, min) {
    // creiamo un array con all'interno 5 numeri casuali
    let casualNumber = [];

    while (casualNumber.length < 5) {
        numbRandom = Math.ceil(Math.random() * (max - min)) + 1;
        if (!casualNumber.includes(numbRandom)) {
            casualNumber.push(numbRandom)
        }
    }
    for (i = 0; i < casualNumber.length; i++) {
        thisNumb = casualNumber[i]
        // console.log(thisNumb)
        boxNumberCasual.innerHTML += (`<span class="px-3 fs-1">${thisNumb}</span>`)
    }
    return casualNumber
}
// funzione per nascondere degli elementi
function dNone(elementDomNone) {
    elementDomNone.classList.add('d-none')
}

// funzione per stampare degli elementi in dom
function printToDome(whereInDome, markupEl) {
    whereInDome.insertAdjacentHTML('beforeend', markupEl)
}

function promptUserNumber(arrayUser) {
    while (arrayUser.length < 5) {
        const userNumber = parseInt(prompt('inserisci i numeri appena visti'))
        if (!arrayUser.includes(userNumber)) {
            arrayUser.push(userNumber)
        } else {
            alert('numero gia inserito!!!')
        }
    }
    return (arrayUser)
}
num1 = [
    '1',
    '2',
    '3'
]
num2 = [
    '1',
    '4',
    '5'
]

// funzone di verifica
function verifica(userNumb, pcNumb) {

    console.log('verifica--numero user', userNumb)
    console.log('verifica--numero pc', pcNumb)
    // dichiaro la costante che conterrà i numeri indovinati
    const numGiusti = []
    // creo un loop per riprendere i numeri generati dall'utente
    for (let i = 0; i < userNumb.length; i++) {
        thisUserNumb = userNumb[i]
        console.log(thisUserNumb)
        if (pcNumb.includes(thisUserNumb)) {
            numGiusti.push(thisUserNumb)
        }
    }
    console.log('ver, numeri giusti', numGiusti)

    const markupCheck = `<h3>Hai indovinato ${numGiusti.length} numeri: ${numGiusti}</h3>`
    printToDome(boxinput, markupCheck)
}