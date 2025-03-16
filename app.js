// El principal objetivo de este desafío es 
// fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let capturaAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ullistaAmigos = document.getElementById("listaAmigos");
let ulresultado = document.getElementById("resultado");


function convertirMayusculas() {
        capturaAmigo.value = capturaAmigo.value.toUpperCase();
}

function agregarAmigo(){
    
    if (capturaAmigo.value == ""){
        alert('No Puede haber espacios en blanco')
    } else {
        
        listaAmigos.push(capturaAmigo.value);
        ullistaAmigos.innerHTML += `<li>${capturaAmigo.value}</li>`;
    }
    limpiaAmigo();                       
};

function sortearAmigo(){
    let amigoSecreto = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
    ulresultado.innerHTML = `<li>El Amigo Secreto es: ${amigoSecreto}</li>`;
   
}

function limpiaAmigo(){
    //console.log(capturaAmigo)
    let valorAmigo = document.getElementById('amigo');
    valorAmigo.value ='';
    
}

//creamos una funcion que nos permita reiniciar la aplicacion
function reiniciarAplicacion(){
    limpiaAmigo();
    listaAmigos = [];
      
    let resultado = document.getElementById('listaAmigos');
    if (resultado) {
        resultado.innerHTML = '';
    }
            ulresultado.innerHTML = '';   
}
   
    
