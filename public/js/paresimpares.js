console.log("Hola desde tablas.js");

var btn_mostrar_tabla = document.getElementById("btn_mostrar_tabla");
var txt_resultado = document.getElementById("txt_Resultado");
var btn_limpiar = document.getElementById("btn_limpiar");
btn_mostrar_tabla.addEventListener("click", function (event) {
    
    var txt_num_1 = parseInt(document.getElementById("txt_num_1").value);

    if (txt_num_1) {

        let resultadoFinal = "";

        for (let index = 1; index <= txt_num_1; index++) {
            
            let res = ` ${txt_num_1} x ${index} = ${txt_num_1 * index}`;
            if (index % 2 === 0) {
                txt_pares.innerHTML += index + "<br>";
            } else {
                txt_impares.innerHTML += index + "<br>";
            }

        }


    } else {
        txt_mensaje.innerHTML = "INGRESE NUMERO";
        console.log("Por favor ingrese un numero valido");
    }
});

btn_limpiar.addEventListener("click", function () {
    txt_pares.innerHTML = "";
    txt_impares.innerHTML = "";
    document.getElementById("txt_num_1").value = "";
});