var btn_mostrar_tabla=document.getElementById('btn_mostrar_tabla');
var txt_resultado=document.getElementById('txt_resultado');
btn_mostrar_tabla.addEventListener('click',function(e){
    var txt_num1=parseInt(document.getElementById('input_numero').value);
    if (txt_num1){
     var resultado2="";
    for (let index = 1; index <=12; index++) {
        let resultado= `${txt_num1}*${index}=${txt_num1*index} <br>`;
        resultado2 += resultado;
    }
    txt_resultado.innerHTML=resultado2;
    }else{
        alert("Por favor ingrese un numero valido");
    }
});

document.getElementById('btn_limpiar_tabla').addEventListener('click',function(){
    document.getElementById('txt_resultado').innerHTML="";
    document.getElementById('input_numero').value="";
});
