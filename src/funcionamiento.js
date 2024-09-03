function AdivinarNumero(props){
    let numeroU = document.getElementById("numerousuario").value;     
    let numeroR = Math.floor(Math.random()*10) + 1;

    if(numeroU == numeroR){
        alert("¡Acertó el número!");
    }
    else{
        alert(`Incorrecto. El número era ${numeroR}.`)
    }
}

export default AdivinarNumero;
