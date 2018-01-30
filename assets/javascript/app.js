$(document).ready(function() {

  $("#play").on("click", function(){
    $("#play").remove();
    $("#placeHolder").remove();
    $("#instruction").remove();
    loadQuestion();
  });

  $(document).on("click", ".answer-button", function(e) {
    userPicked();
  })

  var selection = [{ 
      "image" : "assets/images/Blastoise.png",
      "correctAnswer" : "A. Blastoise",
      "choices" : ["A. Blastoise", "B. Squirtle", "C. Wartortle", "D. Carracosta"]
    },{
      "image" : "assets/images/Lapras.png",
      "correctAnswer" : "B. Lapras",
      "choices" : ["A. Gyarados", "B. Lapras", "C. Golding", "D. Magicarp"]
    },{
      "image" : "assets/images/Lickitung.png",
      "correctAnswer" : "A. Lickitung",
      "choices" : ["A. Lickitung", "B. Lickilicky", "C. Rapidash", "D. Slowbro"]
    },{
      "image" : "assets/images/Machamp.png",
      "correctAnswer" : "C. Machamp",
      "choices" : ["A. Machop", "B. Machoke", "C. Machamp", "D. Hitmonchan"]
    },{
      "image" : "assets/images/Scyther.png",
      "correctAnswer" : "A. Scyther",
      "choices" : ["A. Scyther", "B. Scizor", "C. Pinsir", "D. Venomoth"]
    },{
      "image" : "assets/images/Snorlax.png",
      "correctAnswer" : "D. Snorlax",
      "choices" : ["A. Munchlax", "B. Slowbro", "C. Slowpoke", "D. Snorlax"]
    },{
      "image" : "assets/images/Starmie.png",
      "correctAnswer" : "C. Starmie",
      "choices" : ["A. Staryu", "B. Shellder", "C. Starmie", "D. Goldeen"]
    },{
      "image" : "assets/images/Tentacruel.png",
      "correctAnswer" : "D. Tentacruel",
      "choices" : ["A. Tentacool", "B. Seadra", "C. Victreebel", "D. Tentacruel"]
    },{
      "image" : "assets/images/Venusaur.png",
      "correctAnswer" : "C. Venusaur",
      "choices" : ["A. Bulbasaur", "B. Ivysaur", "C. Venusaur", "D. Megasaur"]
    },{
      "image" : "assets/images/Cloyster.png",
      "correctAnswer" : "A. Cloyster",
      "choices" : ["A. Cloyster", "B. Shellder", "C. Klinger", "D. Poliwhirl"]
    }];

  var questions = selection;
  var currentQuestion = 0;
  var counter = 30;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;


  function countDown() {
    counter--;
    $("#timer").html(counter);
    if (counter <= 0) {
      timeOut(); ///////
    }
  }

  function loadQuestion() {
    timer = setInterval(countDown(), 1000);
    $("#image").html("<img src=" + selection[currentQuestion].image + " class='img-thumbnail border-dark'style='padding: 20px'>");
    for (var i = 0; i < selection[currentQuestion].choices.length; i++) {
      $("#textGoesHere").append("<button class='answer-button' id='button-"
        + i + "' data-name='" + selection[currentQuestion].choices[i] + "'>"
        + selection[currentQuestion].choices[i] + "</button>");
    }
  }

  function nextQuestion() {
    counter = 30;
    $("#timer").html(counter);
    currentQuestion++;
    loadQuestion();
  }

  function userPicked(e) {
    clearInterval(timer);
    if ($(e.target).data("name") === selection[currentQuestion].correctAnswer) {
      correct();
    }
    else {
      incorrect();
    }
  }

  function correct() {
    clearInterval(timer);
    correct++;
    ("#textGoesHere").html("<p class='lead text-center'>Meowth, that's right!</p>");
    if (currentQuestion === selection.length - 1) {
      setTimeout(result(), 3000);
    }
    else {
      setTimeout(nextQuestion(), 3000);
    }
  }

  function incorrect() {
    clearInterval(timer);
    incorrect++;
    ("#textGoesHere").html("<p class='lead text-center'>Meowth, that's wrong!</p>");
    $("#textGoesHere").append("<p class='lead text-center>Correct answer was " + selection[currentQuestion].correctAnswer + "</p>");
    if (currentQuestion === selection.length - 1) {
      setTimeout(result(), 3000);
    }
    else {
      setTimeout(nextQuestion(), 3000);
    }
  }

  function timeOut() {
    clearInterval(timer);
    $("#textGoesHere").html("<p class='lead text-center>Time's Up!</p>");
    $("#textGoesHere").append("<p class='lead text-center>Correct answer was " + selection[currentQuestion].correctAnswer + "</p>");
    if (currentQuestion === selection.length - 1) {
      setTimeout(result(), 3000);
    }
    else {
      setTimeout(nextQuestion(), 3000);
    }
  }

  function result() {

  }

  });


 /*   
  // other globals
  var timer = 30;
  var currentImage = 0;
  var choiceCount = 0;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var textGoesHere;
  var userPick;

  function countDown() {
    timer--;
    $("#timer").html(timer);
    if (timer <= 0) {
      console.log("Time's Up")
      outOfTime();
    }
  }

  //here is for the slides. the question itself
  function loadImage() {
    timer = setInterval(countDown(), 1000);
    $("#image").html("<img src=" + selection.image +
      " class='img-thumbnail border-dark'style='padding: 20px'>");
    for (var i = 0; i < selection[currentImage].choices.length; i++) {
      $("#textGoesHere").append("<button class='answer-button' id='button-" + 
    }
  }
//here pushes the choices to the page for the player to select from
  function choices() { 
    textGoesHere =
      "<p class='lead text-center'>" + choicesArray[currentImage][0] +
      "</p><p class='lead text-center'>" + choicesArray[currentImage][1] +
      "</p><p class='lead text-center'>" + choicesArray[currentImage][2] +
      "</p><p class='lead text-center'>"+ choicesArray[currentImage][3] +
      "</p>";
    $("#textGoesHere").html(textGoesHere);
  }
// here is for when the player gets the correct answer
  function correct() {
    correct++;
    textGoesHere = "<p class='text-center'>Yep! Pokedex says it's " +
      correctAnswers[currentImage] + "</p>" + "<img scr=" + images[0] + ">";
    $("#textGoesHere").html(textGoesHere);
  }
// here is for when the player gets a wrong answer
  function incorrect() {
    incorrect++;
    textGoesHere = "<p class='lead text-center'>Nope! Pokedex says it's " +
      correctAnswers[currentImage] + "</p>" + "<img scr=" + images[0] + ">";
    $("#textGoesHere").html(textGoesHere);
  }
// here is for when the player doesn't have any answer at all and the time is up
  function outOfTime() {
    unanswered++;
    textGoesHere = "<p class='lead text-center'>Oh no! You ran out of time!" +
      "</p><p class='lead text-center'>Pokedex says it's " +
      correctAnswers[currentImage] + "</p>" + "<img scr=" + images[0] + ">";
    $("#textGoesHere").html(textGoesHere);
  }
// here is for the final page of the game, flashing the results
  function playAgain() {
    $("#play").show();
    textGoesHere = "<p class='lead text-center'>Correct Answers: " + correct + "</p>" +
      "<p class='lead text-center'>Wrong Answers: " + incorrect + "</p>" +
      "<p class='lead text-center'>Unanswered: " + unanswered + "</p>" +
      "<p class='lead text-center'>Click play to start over." + "</p>"
  }
// here is for when the player resets the game;
  function reset() {
    currentImage = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    currentImage = 30;
    nextImage();
    choices();
  }

  function countDown() {
    timer--;
    $("#timer").text(timer);
  }
// here is for when the player hits the play button, starts the game
  $("#play").on("click", function() {
    $("#play").remove();
    $("#instruction").hide();
    $("#placeholder").hide();
    nextImage();
    choices();
    countDown();
  });
*/


