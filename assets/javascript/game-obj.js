var currentScore;

window.onload = function() {
    
  crystalCollector.initGame();
  
};


var crystalCollector = {

  targetNumber: 0,
  crystalHiddenValues: [],
  imageSource: ["blue-gem.png", "blue-gem.png", "green-gem.png", "green-gem.png"],
  winCount: 0,
  loseCount: 0,


  // add lines to print win & lose count to screen

  addCrystalValue: function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;
    console.log(currentScore);
    $("#current-total").text(currentScore);

    if (currentScore === crystalCollector.targetNumber) {
      crystalCollector.winCount++;
      $("#count-wins").text(crystalCollector.winCount);
      console.log("wins: " + crystalCollector.winCount);
      $("#game-result").removeClass("alert alert-sucess alert-danger");
      $("#game-result").addClass("alert alert-success");
      $("#game-result").text("YOU WON!");
      crystalCollector.initGame();
      
    }
    else if (currentScore > crystalCollector.targetNumber) {
      crystalCollector.loseCount++;
      $("#count-losses").text(crystalCollector.loseCount);
      console.log("losses: " + crystalCollector.loseCount);
      $("#game-result").removeClass("alert alert-sucess alert-danger");
      $("#game-result").addClass("alert alert-danger");
      $("#game-result").text("YOU LOST!");
      crystalCollector.initGame();
      
    }
  },

  initGame: function() {

    currentScore = 0;
    $("#crystals").empty();
    $("#current-total").text(currentScore);
    $("#count-wins").text(crystalCollector.winCount);
    $("#count-losses").text(crystalCollector.loseCount);
    
    
    crystalCollector.targetNumber = 19 + Math.floor((Math.random() * ((120-19) + 1)));
    console.log(crystalCollector.targetNumber);
    $("#number-to-guess").text(crystalCollector.targetNumber);

    for (var i=0; i < 4; i++) {
      crystalCollector.crystalHiddenValues[i] = Math.floor((Math.random() * 12) + 1);
      console.log(crystalCollector.crystalHiddenValues[i]);
    };

  // create four crystal buttons and assign a value to each
    for (var i=0; i < crystalCollector.imageSource.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/" + crystalCollector.imageSource[i]);
        imageCrystal.attr("data-crystalvalue", crystalCollector.crystalHiddenValues[i]);
        $("#crystals").append(imageCrystal);
    }; 

    $(".crystal-image").click(crystalCollector.addCrystalValue);
  }

  
};
