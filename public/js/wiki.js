$("#submitButton").on("click", function(event) {
  event.preventDefault();

  var locations = [];
  // Make a newChirp object
  var startLocation = {
    city: $("#cityStart")
      .val()
      .trim(),
    state: $("#stateStart")
      .val()
      .trim()
  };

  var firstStop = {
    city: $("#cityStopOne")
      .val()
      .trim(),
    state: $("#stateStopOne")
      .val()
      .trim()
  };

  var secondStop = {
    city: $("#cityStopTwo")
      .val()
      .trim(),
    state: $("#stateStopTwo")
      .val()
      .trim()
  };

  var thirdStop = {
    city: $("#cityStopThree")
      .val()
      .trim(),
    state: $("#stateStopThree")
      .val()
      .trim()
  };

  var endLocation = {
    city: $("#cityEnd")
      .val()
      .trim(),
    state: $("#stateEnd")
      .val()
      .trim()
  };

  locations.push(startLocation);
  locations.push(firstStop);
  locations.push(secondStop);
  locations.push(thirdStop);
  locations.push(endLocation);
  console.log(locations);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", locations)
    // On success, run the following code
    .then(function() {
      var row = $("<div>");
      row.addClass("start");

      row.append("<p>" + startLocation.city + "</p>");
      $("body").prepend(row);
    });
});
