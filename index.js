let numeros = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];
let tipos = ["♦","♥","♠","♣"];

window.onload = function(){
    let aleatorio = Math.floor(Math.random()*4);  
    let aleatorio2 = Math.floor(Math.random()*14);  
    
    let numero = numeros[aleatorio2];
    let tipo = tipos[aleatorio];
    
    let elemento1 = document.getElementById("cartaArriba");
    let elemento2 = document.getElementById("cartaMedio");
    let elemento3 = document.getElementById("cartaAbajo");
   
    
    if(tipo === "♥" ){
        elemento1.style.color = "red";
        elemento3.style.color = "red";
    }else if (tipo === "♦"){
        elemento1.style.color = "red";
        elemento3.style.color = "red";
    }
    
    elemento1.innerHTML =  tipo;
    elemento2.innerHTML =  numero;
    elemento3.innerHTML =  tipo;




};