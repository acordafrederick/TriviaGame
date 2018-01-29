$(document).ready(function() {

  var images = [ "assets/images/Pokeball.png",
      "assets/images/Blastoise.png",
      "assets/images/Lapras.png",
      "assets/images/Lickitung.png",
      "assets/images/Machamp.png",
      "assets/images/Scyther.png",
      "assets/images/Snorlax.png",
      "assets/images/Starmie.png",
      "assets/images/Tentacruel.png",
      "assets/images/Venusaur.png",
      "assets/images/Cloyster.png"
    ]
  var correctAnswers = [ 0,
      "A. Blastoise", "B. Lapras", "A. Lickitung", "C. Machamp", "A. Scyther",
      "D. Snorlax", "C. Starmie", "D. Tentacruel", "C. Venusaur", "A. Cloyster"
    ]
  var choicesArray = [ 0,
      ["A. Blastoise", "B. Squirtle", "C. Wartortle", "D. Carracosta"],
      ["A. Gyarados", "B. Lapras", "C. Golding", "D. Magicarp"],
      ["A. Lickitung", "B. Lickilicky", "C. Rapidash", "D. Slowbro"],
      ["A. Machop", "B. Machoke", "C. Machamp", "D. Hitmonchan"],
      ["A. Scyther", "B. Scizor", "C. Pinsir", "D. Venomoth"],
      ["A. Munchlax", "B. Slowbro", "C. Slowpoke", "D. Snorlax"],
      ["A. Staryu", "B. Shellder", "C. Starmie", "D. Goldeen"],
      ["A. Tentacool", "B. Seadra", "C. Victreebel", "D. Tentacruel"],
      ["A. Bulbasaur", "B. Ivysaur", "C. Venusaur", "D. Megasaur"],
      ["A. Cloyster", "B. Shellder", "C. Klinger", "D. Poliwhirl"]
    ]
  
  var timer = 30;
  var counter = 0;
  var choiceCount = 0;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var textGoesHere;
  var userPick;

  function choices() { 
    textGoesHere =
      "<p class='lead text-center'>" + choicesArray[counter][0] +
      "</p><p class='lead text-center'>" + choicesArray[counter][1] +
      "</p><p class='lead text-center'>" + choicesArray[counter][2] +
      "</p><p class='lead text-center'>"+ choicesArray[counter][3] +
      "</p>";
    $("#textGoesHere").html(textGoesHere);
  }

  function correct() {
    correct++;
    textGoesHere = "<p class='text-center'>Yep! Pokedex says it's " +
      correctAnswers[counter] + "</p>" + "<img scr=" + images[0] + ">";
    $("#textGoesHere").html(textGoesHere);
  }

  function incorrect() {
    incorrect++;
    textGoesHere = "<p class='lead text-center'>Nope! Pokedex says it's " +
      correctAnswers[counter] + "</p>" + "<img scr=" + images[0] + ">";
    $("#textGoesHere").html(textGoesHere);
  }

  function outOfTime() {
    unanswered++;
    textGoesHere = "<p class='lead text-center'>Oh no! You ran out of time!" +
      "</p><p class='lead text-center'>Pokedex says it's " +
      correctAnswers[counter] + "</p>" + "<img scr=" + images[0] + ">";
    $("#textGoesHere").html(textGoesHere);
  }

  function playAgain() {
    $("#play").show();
    textGoesHere = "<p class='lead text-center'>Correct Answers: " + correct + "</p>" +
      "<p class='lead text-center'>Wrong Answers: " + incorrect + "</p>" +
      "<p class='lead text-center'>Unanswered: " + unanswered + "</p>" +
      "<p class='lead text-center'>Click play to start over." + "</p>"
  }

  function reset() {
    counter = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    counter = 30;
    nextImage();
    choices();
  }

  $("#play").on("click", function() {
    $("#play").hide();
    $("#instruction").hide();
    $("#placeholder").hide();
    nextImage();
    choices();
  });

  function nextImage() {
    counter++;
    $("#image").html("<img src=" + images[counter] +
      " class='img-thumbnail border-dark'style='padding: 20px'>");
  }

});
