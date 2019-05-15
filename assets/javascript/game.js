var totalScore = 0;
//Print score
$("#score").append(totalScore);

var wins = 0;
//Print score
$("#win-counter").append(totalScore);

var losses = 0;
//Print score
$("#loss-counter").append(totalScore);

//Generate a random number at the start of the game between 19 and 120
function generate() {
    var random = 19 + Math.floor(Math.random() * 120);
    return random;
}

//Print random number
$("#random").append(generate());


//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

$("#emerald").on("click", function() {
    // Create a string which will hold the lottery number
    var crystal = 1 + Math.floor(Math.random() * 12);
    console.log(crystal);

    // ... and then dump the random number into our random-number div.  $("#random-number").prepend("<br><hr>" + lottoNumber);

  });



//Each crystal should have a random hidden value between 1 - 12.
