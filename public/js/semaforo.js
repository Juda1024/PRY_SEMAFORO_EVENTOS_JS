console.log("semaforo.js cargado");

var radio_rojo=document.getElementById("radio_rojo");
var radio_amarillo=document.getElementById("radio_amarillo");
var radio_verde=document.getElementById("radio_verde");
var txt_resultado=document.getElementById("txt_resultado");

radio_rojo.addEventListener("click",function(event){
        // console.log("SE SE LECCIONO COLOR ROJO")
        txt_resultado.textContent="ALTO.......!!"
        
});
radio_amarillo.addEventListener("click",function(event){
        // console.log("SE SE LECCIONO COLOR AMARILLO")
        txt_resultado.textContent="PRECAUSION.......!!"
});
radio_verde.addEventListener("click",function(event){
        // console.log("SE SE LECCIONO COLOR VERDE")
        txt_resultado.textContent="AVANCE.......!!"
});