
var radios = document.querySelectorAll('input[name="color"]');
var txt_resultado = document.getElementById("txt_resultado");

function evaluarSemaforo(color) {
    if (color == "rojo") {
        console.log("SE SELECCIONO COLOR ROJO");
        txt_resultado.textContent = "ALTO.......!!";

    } else if (color == "amarillo") {
        txt_resultado.textContent = "PRECAUCIÓN.......!!";
    } else if (color == "verde") {
        txt_resultado.textContent = "AVANCE.......!!";
    }
}


var marcadoAlInicio = document.querySelector('input[name="color"]:checked');

if (marcadoAlInicio) {

    evaluarSemaforo(marcadoAlInicio.value);
} else {

    txt_resultado.textContent = "NO HAY NINGUN COLOR SELECCIONADO";
}


radios.forEach(function (radio) {
    radio.addEventListener("click", function (event) {
        console.log("SE SELECCIONO UN COLOR");
        evaluarSemaforo(radio.value); 
    });
});