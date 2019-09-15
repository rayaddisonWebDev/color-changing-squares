//IT WORKS!!!
$("document").ready(function() {
  //generates a random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //applies random color
  function setRandomColor() {
    $("#text").css("background-color", getRandomColor());
  }

  //removes random color
  function getRidOfRandom() {
    $("#text").removeAttr("style");
  }

  //removes random color if the checked box is false
  function checkIfRanIsTrue() {
    if ($("#idRandom").prop("checked") == false) {
      getRidOfRandom();
    }
  }

  //makes all random check elements work on click
  $("#idRandom").on("click", function(evt) {
    setRandomColor();
    checkIfRanIsTrue();
    $("#idBlue").prop("checked", false);
    $("#idYellow").prop("checked", false);
    $("#idRed").prop("checked", false);

    $("#text").removeClass("bhighlighted yhighlighted rhighlighted");
  });

  //red
  $("#idRed").on("change", function(evt) {
    $("#text").toggleClass("rhighlighted");
    $("#idBlue").prop("checked", false);
    $("#idYellow").prop("checked", false);
    $("#idRandom").prop("checked", false);
    getRidOfRandom();

    $("#text").removeClass("bhighlighted yhighlighted");
  });

  //blue
  $("#idBlue").on("change", function(evt) {
    $("#text").toggleClass("bhighlighted");
    $("#idRed").prop("checked", false);
    $("#idYellow").prop("checked", false);
    $("#idRandom").prop("checked", false);
    getRidOfRandom();

    $("#text").removeClass("rhighlighted yhighlighted");
  });

  //yellow
  $("#idYellow").on("change", function(evt) {
    $("#text").toggleClass("yhighlighted");
    $("#idRed").prop("checked", false);
    $("#idBlue").prop("checked", false);
    $("#idRandom").prop("checked", false);
    getRidOfRandom();

    $("#text").removeClass("rhighlighted bhighlighted");
  });
});
