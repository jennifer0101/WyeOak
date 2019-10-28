$("#submitButton").on("click", function(event) {
  event.preventDefault();

  var locations = {};
  // Make a newChirp object
  var startLocation =
    $("#cityStart")
      .val()
      .trim() +
    ", " +
    $("#stateStart")
      .val()
      .trim();

  var firstStop =
    $("#cityStopOne")
      .val()
      .trim() +
    ", " +
    $("#stateStopOne")
      .val()
      .trim();

  var secondStop =
    $("#cityStopTwo")
      .val()
      .trim() +
    ", " +
    $("#stateStopTwo")
      .val()
      .trim();

  var thirdStop =
    $("#cityStopThree")
      .val()
      .trim() +
    ", " +
    $("#stateStopThree")
      .val()
      .trim();

  var endLocation =
    $("#cityEnd")
      .val()
      .trim() +
    ", " +
    $("#stateEnd")
      .val()
      .trim();

  locations.a = startLocation;
  locations.b = firstStop;
  locations.c = secondStop;
  locations.d = thirdStop;
  locations.e = endLocation;
  console.log(locations);

  // Send an AJAX POST-request with jQuery
  $.post("/api/all", locations);
  // On success, run the following code
});
