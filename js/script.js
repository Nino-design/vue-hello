/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

var root = new Vue(
    {
         el: '#root',
         data: {
             message:'Ciao a tutti!',
             immagine:'img/boolean-e1626086189994.png',
         }
    }
)