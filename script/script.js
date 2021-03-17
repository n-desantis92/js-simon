// Descrizione:
/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/
$(function functionName() {


  function generaNumeroRandom() {
    var numero = Math.floor(Math.random() * 100) + 1;
    return numero;
  }


  // Un alert() espone 5 numeri generati casualmente.

  var numeriCpu = [];
  var numeriTrovati = [];

  while (numeriCpu.length < 5 ) {
    var numero = generaNumeroRandom();
    if (numeriCpu.includes(numero) == false) {
      numeriCpu.push(generaNumeroRandom());
    }
  }
  console.log(numeriCpu);

  alert("i numeri da ricordare sono: " + numeriCpu);

  // definisco un array dove inserire i numeri dati dall'utente per poi confrontarli con i numeri della CPU
  var sceltaUtente = [];

  // dopo 30 secondi faccio comparire un prompt per inserire i numeri
  var richieste = setTimeout(function () {
    // faccio un ciclo for
    for (var i = 0; i < 5; i++) {
      // faccio inserire i numeri all'utente
      var utente = parseInt(prompt("inserisci un numero da 1 a 100"));
      // inserisco i numeri scelti nell'array da confrontare
      if (numeriCpu.includes(utente)) {
        numeriTrovati.push(utente);
      }
      sceltaUtente.push(utente);

      console.log(sceltaUtente);
    }

    console.log(sceltaUtente);
    console.log(numeriTrovati);

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/
    if (numeriTrovati.length == numeriCpu.length) {

      alert("complimenti hai vinto hai trovato tutti i numeri");
    }else {
      alert("hai trovato: " + numeriTrovati.length + " su " + numeriCpu.length);
      alert("utente: " + numeriTrovati.length + " CPU: " + numeriCpu.length);
    }

  }, 3000);

})
