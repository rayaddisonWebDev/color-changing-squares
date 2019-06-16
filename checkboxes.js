//IT WORKS!!!

//1. Add event hendlers to textbox coming from check boxes
//2. Set up the on change events
//3. Make the changes happen
//3.1. change text box color to desired color
//3.2. make it so that checking off one box unchecks the others
//3.3. make it so that checking off one box undoes any class changes applied by other checked boxes
$("document").ready(function () {


    $("#idRed").on("change", function (evt) {
        $('#text').toggleClass('rhighlighted');
        $("#idBlue").prop("checked", false);
        $("#idYellow").prop("checked", false);

        $('#text').removeClass('bhighlighted yhighlighted');

    });

    $("#idBlue").on("change", function (evt) {
        $('#text').toggleClass('bhighlighted');
        $("#idRed").prop("checked", false);
        $("#idYellow").prop("checked", false);

        $('#text').removeClass('rhighlighted yhighlighted');

    });

    $("#idYellow").on("change", function (evt) {
        $('#text').toggleClass('yhighlighted');
        $("#idRed").prop("checked", false);
        $("#idBlue").prop("checked", false);

        $('#text').removeClass('rhighlighted bhighlighted');

    });

});

//add logic that unchecks the other boxes when one is checked.
//add logic that removes the color class when the other is checked.
//consider using a func that takes in a random data piece as a boolean to uncheck the boxes
