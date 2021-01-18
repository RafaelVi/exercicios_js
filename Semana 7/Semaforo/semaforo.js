var statuscarro = document.getElementById("statuscarro");
var semaforo = 
{
    sinalVerde : document.getElementById("ir"),
    sinalAmarelo : document.getElementById("atencao"),
    sinalVermelho : document.getElementById("parar"),
    
    
    temporarizador : function() {
        
       
        setTimeout(function(){semaforo.sinalVerde.style.backgroundColor = "green",checasinal();},2000);
        setTimeout(function(){semaforo.sinalVerde.style.backgroundColor = "black",checasinal();},8000);
        setTimeout(function(){semaforo.sinalAmarelo.style.backgroundColor = "yellow",checasinal();},9000);
        setTimeout(function(){semaforo.sinalAmarelo.style.backgroundColor = "black",checasinal();},15000);
        setTimeout(function(){semaforo.sinalVermelho.style.backgroundColor = "red",checasinal();},16000);
        setTimeout(function(){semaforo.sinalVermelho.style.backgroundColor = "black",checasinal();},22000);
        setTimeout(function(){
            semaforo.temporarizador();
        },23000);
    }
}
function checasinal(){
    if(semaforo.sinalVerde.style.backgroundColor == "green"){
        statuscarro.textContent = "Andando";
    }
    else if(semaforo.sinalAmarelo.style.backgroundColor == "yellow"){
        statuscarro.textContent = "Desacelerando";
    }
    else if(semaforo.sinalVermelho.style.backgroundColor == "red"){
        statuscarro.textContent = "Parado";
    }
    else{
        statuscarro.textContent = "";
    }
    
}

var botao = document.getElementById("comecar");
botao.addEventListener("click",function(){
    semaforo.temporarizador();
    botao.disabled = true;
})






