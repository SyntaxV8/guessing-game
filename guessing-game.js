(function() {

    let verou = 15

    document.getElementById("play").addEventListener('click', function () {

        let secretnumber = Math.floor(Math.random()*verou) + 1;
        let userguess = document.getElementById("UserGuess").value

       if (secretnumber==userguess) {
           document.getElementById("Message").innerHTML = `Awesome! Your number ${userguess} was correct. You can be named many things, hungry not being one of them.`
       } else {
           document.getElementById("Message").innerHTML = `Bummer... You guessed ${userguess} and the secret number was ${secretnumber}.`
       }
    })
})();