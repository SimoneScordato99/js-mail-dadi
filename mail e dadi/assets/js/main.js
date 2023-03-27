/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// array email

let email = [
    "piero.rossi@gmail.com",
    "ignazio.paoli@hotmail.com",
    "lorenzo.benigno@virgilio.it",
    "paola.lazalaco@gmail.com",
    "simone.scordato@gmail.com",
    "roberto.cipolla@libero.it",
    "mario.panico@gmail.com",
    "virgilio.virgilio@libero.it",
    "mariottide@gmail.com",
    "beppe.vessicchio@gmail.com",
    "che.guevara@hotmail.com",
]
console.log(email)


//verifica
let bottone = document.getElementById("check-btn");
console.log(bottone);
bottone.addEventListener("click", function() {
    let emailMario = document.querySelector("#emailAsk").value;
    console.log(emailMario);
    // soldation
    let piero = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] == emailMario) {
            piero = true;
        }
    }
    if (piero == true) {
        document.querySelector(".row").innerHTML += `<div class="btn btn-success">email verificata</div>
            <h1 class="text-light text-center">GGGGioca ai dadi</h1>
            <div class="col-8 d-flex justify-content-between align-item-center text-light">
                <div>
                    <h3>TU</h3>
                    <div id="io"></div>
                </div>
                <div class="fs-2">
                <h1>VS.</h1>
                <div class="btn btn-success" id="start" onclick="start()">Play</div>
                </div>
                <div>
                    <h3>PC</h3>
                    <div id="pc"></div>
                </div>
            </div>
            <div class="text-light" id="pierino"></div>
        `;
    } else {
        document.querySelector(".row").innerHTML += `<div class="btn btn-danger">email NON verificata, ricarica la pagina</div>`;
    }

});



// dadiiii Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

function start() {
    let numIo = Math.floor(Math.random() *6) +1;
    document.getElementById("io").innerHTML = `${numIo}`;
    let numPc = Math.floor(Math.random() *6) +1;
    document.getElementById("pc").innerHTML = `${numPc}`
    
    if (numIo > numPc) {
        document.getElementById("pierino").innerHTML = `hai vinto`
    } else if ( numIo < numPc) {
        document.getElementById("pierino").innerHTML = `hai perso`
    } else if ( numIo == numPc) {
        document.getElementById("pierino").innerHTML = `pareGGGGio`
    }
}
