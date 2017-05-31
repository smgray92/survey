$(document).ready(function () {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var colorInput = $("input#color").val();
    var animalInput = $("input#animal").val();
    var sportInput = $("input#sport").val();
    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".color").text(colorInput);
    $(".animal").text(animalInput);

    $(".sport").text(sportInput);
    $("#hidden").show();
    event.preventDefault();

  });
});
