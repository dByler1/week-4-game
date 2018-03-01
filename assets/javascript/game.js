
//global variables
var playerScore = 0;
var gameNumber = 0;

var crystal_1 = 0;
var crystal_2 = 0;
var crystal_3 = 0; 
var crystal_4 = 0;

var wins = 0;
var losses = 0;


//methods

//generate and return random number for the game number
function gameNumberGenerator() {
    var randomNumberBetween0and120 = Math.floor(Math.random() * 121); 
    return randomNumberBetween0and120;
};

//generate and return random number for the crystals
function crystalNumberGenerator() {
    var crystalNumber = Math.floor(Math.random() * 13);
    return crystalNumber;
};

//start the game
//click the game button to get the random number
$( ".gameNumberBtn" ).click(function() {
    gameNumber = gameNumberGenerator();
    $( ".gameNumber" ).html("Match this number " + gameNumber);
    $(".crystalSum").html("Crystal Sum")

    crystal_1 = crystalNumberGenerator();
    crystal_2 = crystalNumberGenerator();
    crystal_3 = crystalNumberGenerator();
    crystal_4 = crystalNumberGenerator();
});


  //crystal clicks below 
  
  //on the first click get a random # from above, store it globablly, add it to the global playerScore 
  // print the global player score
  $(".crystal_1").on("click", function() {
        playerScore += crystal_1;
        $(".crystalSum").html(playerScore);
        scoreOperation();
    });

//second crystal
  $(".crystal_2").on("click", function() {
        playerScore += crystal_2;
        $(".crystalSum").html(playerScore);
        scoreOperation();

    });

  //third crystal
  $(".crystal_3").on("click", function() {
        playerScore += crystal_3;
        $(".crystalSum").html(playerScore)
        scoreOperation();
    });


  //fourth crystal
  $(".crystal_4").on("click", function(){
        playerScore += crystal_4;
        $(".crystalSum").html(playerScore);
        scoreOperation();
       
    });
  
  //score operation - if the player score is greater than the game number, increment losses
  
  function scoreOperation() {
    if (playerScore > gameNumber) {
      losses ++;
      $(".crystalSum").html("You lose, play again")
      $( ".gameNumber" ).html("Match this number: ");
  
      $(".wins").html("Wins: " + wins);
      $(".losses").html("Losses: " + losses);
      gameNumber = 0;
      playerScore = 0;
      crystal_1 = crystalNumberGenerator();
      crystal_2 = crystalNumberGenerator();
      crystal_3 = crystalNumberGenerator();
      crystal_4 = crystalNumberGenerator();
        $("#crystal").on("click", function(){

        });

  } else if ( playerScore > 0 && playerScore === gameNumber ) {
          wins ++;
          $(".crystalSum").html("You win, play again")
          $( ".gameNumber" ).html("Match this number: ");
  
          $(".wins").html("Wins: " + wins);
          $(".losses").html("Losses: " + losses);
          gameNumber = 0;
          playerScore = 0;
          crystal_1 = crystalNumberGenerator();
            crystal_2 = crystalNumberGenerator();
            crystal_3 = crystalNumberGenerator();
            crystal_4 = crystalNumberGenerator();

            $("#crystal").on("click", function(){
                
            });
      };
    }

    
  




