var score = 0;
//Print score
$("#score").append(score);

var wins = 0;
//Print wins
$("#win-counter").append(wins);

var losses = 0;
//Print losses
$("#loss-counter").append(losses);

//Generate a random number at the start of the game between 19 and 120
function generate() {
    var random = 19 + Math.floor(Math.random() * 120);
    return random;
}

//Print random number
$("#random").append(generate());

//Each crystal should have a random hidden value between 1 - 12.
var emerald = Math.floor(Math.random() * 12) + 1;
var turquoise = Math.floor(Math.random() * 12) + 1;
var diamond = Math.floor(Math.random() * 12) + 1;
var amethyst = Math.floor(Math.random() * 12) + 1;

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
$("#emerald").on("click", function() {
    score += emerald;
    $("#score").text("Score: " + emerald);
  });