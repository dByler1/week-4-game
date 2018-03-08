
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
    var randomNumberBetween0and120 = Math.floor(Math.random() * ((120-19)+1) + 19);
    return randomNumberBetween0and120;
};

//generate and return random number for the crystals
function crystalNumberGenerator() {
    var crystalNumber = Math.floor(Math.random() * 13);
    return crystalNumber;
};

function updateNumbers(value) {
    playerScore += value;
    $(".crystalSum").html(playerScore);
    scoreOperation();
}

//start the game
//click the game button to get the random number
$( ".gameNumberBtn" ).click(function() {
    gameNumber = gameNumberGenerator();
    $( ".gameNumber" ).html("Match this number " + gameNumber);
    $(".crystalSum").html("Click the crystals to get a number")

    crystal_1 = crystalNumberGenerator();
    crystal_2 = crystalNumberGenerator();
    crystal_3 = crystalNumberGenerator();
    crystal_4 = crystalNumberGenerator();
    $("button").prop("disabled", false);
});


  //crystal clicks below 
  
  //on the first click get a random # from above, store it globablly, add it to the global playerScore 
  // print the global player score
//   $(".crystal").on("click", function() {
//       crystal_1 = this."#crystal_1"
//   })
  
  
  $("#crystal_1").on("click", function() {
        updateNumbers(crystal_1);
    });

//second crystal
  $("#crystal_2").on("click", function() {
        playerScore += crystal_2;
        $(".crystalSum").html(playerScore);
        scoreOperation();
    });

  //third crystal
  $("#crystal_3").on("click", function() {
        playerScore += crystal_3;
        $(".crystalSum").html(playerScore)
        scoreOperation();
    });


  //fourth crystal
  $("#crystal_4").on("click", function(){
        playerScore += crystal_4;
        $(".crystalSum").html(playerScore);
        scoreOperation();
       
    });
  
  //score operation - if the player score is greater than the game number, increment losses
  
  
  //reset function 
  function resetGame() {
    $( ".gameNumber" ).html("Match this number: ");
    $("button").prop("disabled", true);
    gameNumber = 0;
    playerScore = 0;
    $(".wins").html("Wins: " + wins);
          $(".losses").html("Losses: " + losses);
  }
  
  function scoreOperation() {
    if (playerScore > gameNumber) {
      losses ++;
      $(".crystalSum").html("You lose, play again")
      resetGame();
  } else if ( playerScore > 0 && playerScore === gameNumber ) {
          wins ++;
          $(".crystalSum").html("You win, play again") 
          resetGame();
      };
    }




    var files = [
        "pavans_first_birthday.mov",
        "owens_asleep_at_the_computer.jpg",
        "michael_fights_a_polar_bear.mp4",
        "nate_road_rage.avi",
        "ruby_skydiving.jpeg",
        "ken_getting_his_black_belt.png",
        "dan_winning_underground_street_race.mov",
        "its_hard_to_come_up_with_file_names.gif",
        "seriously_this_is_taking_too_long.mpg",
        "i_wonder_how_many_of_these_i_should_have.png",
        "probably_a_few_more.avi",
        "nutmeg_is_clawing_my_sneakers_again.mp4",
        "cat_i_will_destroy_you.gif",
        "i_wish_we_had_a_dog.jpeg",
        "stop_looking_at_me_like_that_nutmeg.mpeg",
        "aww_i_cant_hate_you.png",
        "omg_my_sneakers.avi",
        "cat_you_are_the_worst.mp4"
      ];


    //   for (i = 0; i < files.length; i++) {
    //       if(files.i.endsWith("jpg") ) {
    //           console.log(true);
    //       }
    //   }
    
      files.forEach(function(element) {
        if (element.endsWith("jpg")) {
            console.log(element);
        }
      });

//       ### Image File Extensions

// * jpg
// * gif
// * jpeg
// * png

// ### Video File Extensions

// * mov
// * avi
// * mpeg
// * mp4
// * mpg

    
  




