
//global variables
var playerScore = 0;
var gameNumber = 0;

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
    var localGameNumber = gameNumberGenerator();
    $( ".gameNumber" ).html("Match this number " + localGameNumber);
    gameNumber += localGameNumber;

});


  //crystal clicks below 
  
  //on the first click get a random # from above, store it locally, add it to the global playerScore 
  // print the global player score
  $(".crystal_1").one("click", crystal1_firstClick)
  function crystal1_firstClick() {
      var localCrystal1 = crystalNumberGenerator();
        playerScore += localCrystal1;
        $(".crystalSum").html(playerScore);

   //on second and subsequent clicks add the local number to the global player score, print the new player score 
      $(this).click(function() {
        playerScore += localCrystal1;
        $(".crystalSum").html(playerScore);

    });
  }

//second crystal
  $(".crystal_2").one("click", crystal2_firstClick)
  function crystal2_firstClick() {
      var localCrystal2 = crystalNumberGenerator();
        playerScore += localCrystal2;
        $(".crystalSum").html(playerScore);
   
      $(this).click(function() {
        playerScore += localCrystal2;
        $(".crystalSum").html(playerScore)

    });
  }

  //third crystal
  $(".crystal_3").one("click", crystal3_firstClick)
  function crystal3_firstClick() {
      var localCrystal3 = crystalNumberGenerator();
        playerScore += localCrystal3;
        $(".crystalSum").html(playerScore)
   
      $(this).click(function() {
        playerScore += localCrystal3;
        $(".crystalSum").html(playerScore)
        
    });
  }


  //fourth crystal
  $(".crystal_4").one("click", crystal4_firstClick)
  function crystal4_firstClick() {
      var localCrystal4 = crystalNumberGenerator();
        playerScore += localCrystal4;
        $(".crystalSum").html(playerScore)
   
      $(this).click(function() {
        playerScore += localCrystal4;
        $(".crystalSum").html(playerScore)
       
    });
  }
  
  
//FOR SOME UNKNOWN REASON THE BELOW CODE DOESN'T FIRE. I tried wrapping it in a function and calling the function in every crystal click
// that worked, but messed up the numbers somehow. I tried if else statements, and changing the conditionals around with no success. 

  //score operation - if the player score is greater than the game number, increment losses
  
    if (playerScore > gameNumber) {
      losses ++;
      $(".crystalSum").html("You lose, play again")
      $( ".gameNumber" ).html("Match this number: ");
  
      $(".wins").html("Wins: " + wins);
      $(".losses").html("Losses: " + losses);
  } 
      
  // if player score is greater than 0 and player score equals the game number, increment wins
      if ( playerScore > 0 && playerScore === gameNumber ) {
          wins ++;
          $(".crystalSum").html("You win, play again")
          $( ".gameNumber" ).html("Match this number: ");
  
          $(".wins").html("Wins: " + wins);
          $(".losses").html("Losses: " + losses);
      };
  
  




