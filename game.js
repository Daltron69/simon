
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];


gamePattern.push(randomChosenColor);


$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
