//Creazione lista email accettate
const numbers = [1,2,3,4,5,6];

//select the Pc container in html
const containerPc = document.getElementById("container-pc");

//select the User container in html
const containerUser = document.getElementById("container-user");

//select the Winner container in html
const containerWinner = document.getElementById("container-winner")




//select the Pc button
const buttonPc = document.getElementById("button-pc");
console.log(buttonPc);

//select the user button
const buttonUser = document.getElementById("button-user");
console.log(buttonUser);


//add 'click' to PC button
buttonPc.addEventListener('click',
    function(){
        const numeroRandom = Math.floor(Math.random()*6 +1);
        let numerouscito = numeroRandom
        let messaggio = "Il numero del computer e' ";
        console.log(numeroRandom);
        containerPc.innerHTML = messaggio + numeroRandom;
        }
)

//add 'click' to user button
buttonUser.addEventListener('click',
    function(){
        const numeroRandom = Math.floor(Math.random()*6 +1);
        let numerouscito = numeroRandom;
        let messaggio = "Il tuo numero e' ";
        console.log(numeroRandom); 
        containerUser.innerHTML = messaggio + numeroRandom;
    }
)




//DECORATION
document.getElementById("container-pc").style.color = "red";
document.getElementById("container-pc").style.backgroundColor = "black";

document.getElementById("container-user").style.color = "yellow";
document.getElementById("container-user").style.backgroundColor = "blue";

