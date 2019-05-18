$(document).ready(function () {
    //Initialize variables
    var random;
    var score = 0;
    var wins = 0;
    var losses = 0;
    //Array of crystals
    var crystals = ["#emerald", "#turquoise", "#diamond", "#amethyst"];

    //Setup new game
    function setup() {
        //Generate a random number at the start of the game between 19 and 120
        random = 19 + Math.floor(Math.random() * 120);
        //Print random number
        $("#random").html(random);
        
        //Loop through crystals array
        for (var i = 0; i < crystals.length; i++) {
            //Generate random number between 1 and 12
            var value = Math.floor(Math.random() * 12) + 1;
            //Assign value to each crystal
            $(crystals[i]).attr("data-value", value);
        }

        score = 0;
        $("#score").text("Score: " + score);
    };

    //Write a click handler to take the value from each crystal that is clicked and updated the score 
    $(document).on("click", ".crystals", function() {
        score += parseInt($(this).attr("data-value"));
        $("#score").text("Score: " + score);
        //Check if score is greater than random and update losses
        if (score > random) {
            losses += 1;
            //Print losses
            $("#loss-counter").html(losses);
            alert("You lost!");
            //Reset game
            setup();
        }
        else if (score === random) {
            wins += 1;
            //Print wins
            $("#win-counter").append(wins);
            alert("You win!");
            //Reset game
            setup();
        }

    });

    setup();

});