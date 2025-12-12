console.log("mostrarnumeros.js cargado");
var btn_mostrar_numeros=document.getElementById('btn_mostrar_numeros');
var txt_resultado=document.getElementById('txt_resultado2');
btn_mostrar_numeros.addEventListener('click',function(evento){
    let numeros="";
    let inicio= parseInt(document.getElementById('input_inicio').value);
    let fin= parseInt(document.getElementById('input_fin').value);
    for (let i = inicio; i <= fin; i++) {
        numeros+=`${i} <br>`;
    }
    txt_resultado.innerHTML=numeros;
});

