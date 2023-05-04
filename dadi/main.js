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

        //Creazione Numero random Pc
        const numeroRandomPc = Math.floor(Math.random()*6 +1);
        let messaggioPc = "Il numero del computer e' ";
        containerPc.innerHTML = messaggioPc + numeroRandomPc;


        //Creazione numero random user
        const numeroRandomUser = Math.floor(Math.random()*6 +1);
        let messaggioUser = "Il tuo numero e' "; 
        containerUser.innerHTML = messaggioUser + numeroRandomUser;
        

        if (numeroRandomPc >= numeroRandomUser){
            document.getElementById("container-winner").innerHTML = "Pc won";
        }

        else document.getElementById("container-winner").innerHTML = "You won";
    }
)





//DECORATION
document.getElementById("container-pc").style.color = "red";
document.getElementById("container-pc").style.backgroundColor = "black";

document.getElementById("container-user").style.color = "yellow";
document.getElementById("container-user").style.backgroundColor = "blue";

