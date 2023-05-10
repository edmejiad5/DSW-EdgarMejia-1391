function procesarRespuestas2(){
    let total = 5
    let puntos = 0;

    let myForm =document.forms["formulario2"];
    let respuestasCorrectas =["c", "a", "a", "b", "d",]

    for (let i=1; i<= total; i++){
        if (myForm["r" + i].value == null ||
            myForm["r" + i].value == '') {
            alert('Favor responder todas las preguntas del cuestionario');
            return false;    
        } else {
            if (myForm["r" + i].value === respuestasCorrectas[i -1])
                puntos++;
        }
    }
    let resultado = document.getElementById('resultado2')
    resultado.innerHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ';
    return false;
}
