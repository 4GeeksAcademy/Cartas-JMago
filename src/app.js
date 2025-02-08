let numberCartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cartaBarajada = Math.floor(Math.random()*numberCartas.length);
let elemento = document.getElementById("contenido");
elemento.innerHTML = numberCartas[cartaBarajada];

let palos = ["Espada", "Diamante", "Corazon", "Trebol"];
let randomPaloNumero = Math.floor(Math.random() * palos.length);
let paloSeleccionado = palos[randomPaloNumero];
console.log(paloSeleccionado)
document.getElementById('carta').classList.add(getCard(paloSeleccionado));

function getCard(palos) {
    switch (palos) {
      case "Diamante": return "diamante";
      case "Espada": return "espada";
      case "Corazon": return "corazon";
      case "Trebol": return "trebol";
    }
}
