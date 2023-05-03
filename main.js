//Creazione lista email accettate
const emails = ["demo@gmail.com" , "ale@gmail.com", "ale@gmail.com", "davide@gmail.com", "grande@gmail.com", "ok@gmail.com"];

//select the container in html
const container = document.getElementById("container");

//select the button
const button = document.getElementById("button");
console.log(button);

//add 'click' to button
button.addEventListener('click',
    function(){
        const addedEmail = document.getElementById("text-email").value;
        let messaggio = "You Are Not Invited"
        console.log(addedEmail);

        for (let i = 0; i < emails.length; i++){

            const finalemail = emails[i];
       

            if (finalemail === addedEmail){
                console.log(finalemail);
                messaggio = "Your Email Has Been Accepted";
            }
            // else {
            //     messaggio = "You Are Not In The List"
            // };
        }

        container.innerHTML = messaggio;

    }
)