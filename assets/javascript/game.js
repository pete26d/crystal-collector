 
// declare global variables
var targetNumber;
var currentScore;
var crystalHiddenValues=[];
var imageSource=["blue-gem.png", "blue-gem.png", "blue-gem.png", "blue-gem.png"];
var winCount = 0;
var loseCount = 0;


function addCrystalValue() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  currentScore += crystalValue;
  console.log(currentScore);
  if (currentScore === targetNumber) {
    winCount++;
    initGame();
  }
}

function initGame() {
  
  currentScore = 0;
  $("#crystals").empty();
  
  targetNumber = 19 + Math.floor((Math.random() * ((120-19) + 1)));
  console.log(targetNumber);
  $("#number-to-guess").text(targetNumber);
  
  for (var i=0; i < 4; i++) {
    crystalHiddenValues[i] = Math.floor((Math.random() * 12) + 1);
    console.log(crystalHiddenValues[i]);
  };

  // create four crystal buttons and assign a value to each
  for (var i=0; i < imageSource.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/" + imageSource[i]);
    imageCrystal.attr("data-crystalvalue", crystalHiddenValues[i]);
    $("#crystals").append(imageCrystal);
  };
   
}

window.onload = function() {

  initGame();
  $(".crystal-image").click(addCrystalValue);
  // create event listener for crystal-image class
}

