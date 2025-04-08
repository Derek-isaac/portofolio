document.addEventListener("DOMContentLoaded", function(){
    let number=
Math.floor(Math.random() *10)+ 1;
    let guess=prompt("Guess a number between 1 and 10:");
    if (parseInt(guess) ===number) {alert("correct! you guessed the right number");}
    else {alert("wrong! the number was"+ number);}
});
document.getElementById("contactform").addEventListener('submit',function(event){event.preventDefault();
    let email=
    document.getElementById("email").value;
    
})